import { OperatingSystem } from "~/models";
import { Environment, Pragma } from "~/services";

jest.mock("~/services/localization.ts");

it("should return new content if invalid", () => {
  const newContent = `Invalid JSON`;

  expect(Pragma.processIncoming("", newContent, "")).toBe(newContent);
});

it("should properly handle brackets", () => {
  const initial = `{
    // @sync host=jest
    // "abc": "{xyz}",
  }`;

  const expected = `{
    // @sync host=jest
    "abc": "{xyz}",
  }`;

  expect(Pragma.processOutgoing(initial)).toBe(expected);

  const initial2 = `{
    // @sync host=jest
    "abc": "[xyz]",
  }`;

  const expected2 = `{
    // @sync host=jest
    // "abc": "[xyz]",
  }`;

  expect(Pragma.processIncoming("test", initial2, initial2)).toBe(expected2);
});

describe("outgoing", () => {
  it("should uncomment", () => {
    const initial = `{
      // @sync host=jest
      // "abc": "xyz",
    }`;

    const expected = `{
      // @sync host=jest
      "abc": "xyz",
    }`;

    expect(Pragma.processOutgoing(initial)).toBe(expected);
  });

  it("should remove unnecessary whitespace", () => {
    const initial = `{

      "abc": "xyz",

    }`;

    const expected = `{
      "abc": "xyz",
    }`;

    expect(Pragma.processOutgoing(initial)).toBe(expected);
  });

  it("should remove ignored settings", () => {
    const initial = `{
      // @sync-ignore
      "asd": 5,
      
      "abc": "xyz",
    }`;

    const expected = `{
      "abc": "xyz",
    }`;

    expect(Pragma.processOutgoing(initial)).toBe(expected);
  });
});

describe("ignore", () => {
  it("should move to the bottom", () => {
    const initial = `{
      // @sync-ignore
      "abc": "xyz",

      // @sync-ignore
      "abc2": "xyz2"

      "xyz": "abc",
    }`;

    const expectedOutgoing = `{
      "xyz": "abc",
    }`;

    expect(Pragma.processOutgoing(initial)).toBe(expectedOutgoing);

    const expectedIncoming = `{
      "xyz": "abc",


      // @sync-ignore
      "abc": "xyz",
      // @sync-ignore
      "abc2": "xyz2",
    }`;

    expect(Pragma.processIncoming("", expectedOutgoing, initial)).toBe(
      expectedIncoming
    );
  });

  it("should work with arrays", () => {
    const initial = `{
      // @sync-ignore
      "array": [
        1
      ],

      "xyz": "abc",
    }`;

    const expectedOutgoing = `{
      "xyz": "abc",
    }`;

    expect(Pragma.processOutgoing(initial)).toBe(expectedOutgoing);

    const expectedIncoming = `{
      "xyz": "abc",


      // @sync-ignore
      "array": [
        1
      ],
    }`;

    expect(Pragma.processIncoming("", expectedOutgoing, initial)).toBe(
      expectedIncoming
    );
  });

  it("should work with objects", () => {
    const initial = `{
      // @sync-ignore
      "object": {
        ...
      },

      "xyz": "abc",
    }`;

    const expectedOutgoing = `{
      "xyz": "abc",
    }`;

    expect(Pragma.processOutgoing(initial)).toBe(expectedOutgoing);

    const expectedIncoming = `{
      "xyz": "abc",


      // @sync-ignore
      "object": {
        ...
      },
    }`;

    expect(Pragma.processIncoming("", expectedOutgoing, initial)).toBe(
      expectedIncoming
    );
  });
});

describe("host", () => {
  it("should work with 'host'", () => {
    const input = `{
      // @sync host=jest
      // "abc": "xyz",
    }`;

    const withCorrectHost = `{
      // @sync host=jest
      "abc": "xyz",
    }`;

    const withIncorrectHost = `{
      // @sync host=jest
      // "abc": "xyz",
    }`;

    expect(Pragma.processIncoming("test", input)).toBe(withIncorrectHost);
    expect(Pragma.processIncoming("jest", input)).toBe(withCorrectHost);
  });
});

describe("os", () => {
  Object.keys(OperatingSystem).forEach(key => {
    it(`should work on 'OperatingSystem.${key}'`, () => {
      const os = OperatingSystem[key as keyof typeof OperatingSystem];

      const input = `{
        // @sync os=${key.toLowerCase()}
        // "abc": "xyz",
      }`;

      const withCorrectOS = `{
        // @sync os=${key.toLowerCase()}
        "abc": "xyz",
      }`;

      const withIncorrectOS = `{
        // @sync os=${key.toLowerCase()}
        // "abc": "xyz",
      }`;

      Environment.os = os;

      expect(Pragma.processIncoming("", input)).toBe(withCorrectOS);

      Environment.os =
        os === OperatingSystem.Windows
          ? OperatingSystem.Mac
          : OperatingSystem.Windows;

      expect(Pragma.processIncoming("", input)).toBe(withIncorrectOS);
    });
  });
});

describe("env", () => {
  it("should work with 'env'", () => {
    const input = `{
      // @sync env=SYNCIFY
      "abc": "xyz",
    }`;

    const withCorrectEnv = `{
      // @sync env=SYNCIFY
      "abc": "xyz",
    }`;

    const withIncorrectEnv = `{
      // @sync env=SYNCIFY
      // "abc": "xyz",
    }`;

    process.env.SYNCIFY = "true";

    expect(Pragma.processIncoming("", input)).toBe(withCorrectEnv);

    process.env.SYNCIFY = "";

    expect(Pragma.processIncoming("", input)).toBe(withIncorrectEnv);
  });
});
