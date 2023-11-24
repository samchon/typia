import { Spoiler } from "../helpers/Spoiler";

export type ObjectLiteralProperty = ObjectLiteralProperty.ISomething;
export namespace ObjectLiteralProperty {
  export interface ISomething {
    "something-interesting-do-you-want?": string;
    ["or-something-crazy-do-you-want?"]: string;
  }
  export function generate(): ObjectLiteralProperty {
    return {
      "something-interesting-do-you-want?": "what's that",
      "or-something-crazy-do-you-want?": "nope",
    };
  }
  export const SPOILERS: Spoiler<ObjectLiteralProperty>[] = [
    (input) => {
      input["something-interesting-do-you-want?"] = {} as any;
      return [`$input["something-interesting-do-you-want?"]`];
    },
    (input) => {
      input["or-something-crazy-do-you-want?"] = null!;
      return [`$input["or-something-crazy-do-you-want?"]`];
    },
  ];
  export const BINARABLE = false;
}
