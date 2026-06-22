import typia from "typia";

import { Spoiler } from "../utils/Spoiler";
import { TestRandomGenerator } from "../utils/TestRandomGenerator";

export interface TemplateInterpolationTagged {
  percent: `${number & typia.tags.Minimum<0> & typia.tags.Maximum<100>}%`;
  serial: `SN-${number & typia.tags.Type<"uint32">}`;
  code: `CODE-${string & typia.tags.MinLength<4> & typia.tags.MaxLength<8>}`;
}
export namespace TemplateInterpolationTagged {
  export function generate(): TemplateInterpolationTagged {
    return {
      // The interpolated values are plain `number`/`string`; narrow each
      // template back to its tagged placeholder type (a structural subtype).
      percent:
        `${TestRandomGenerator.integer(0, 100)}%` as TemplateInterpolationTagged["percent"],
      serial:
        `SN-${TestRandomGenerator.integer(0, 100_000)}` as TemplateInterpolationTagged["serial"],
      code: `CODE-${TestRandomGenerator.string(6)}` as TemplateInterpolationTagged["code"],
    };
  }

  export const SPOILERS: Spoiler<TemplateInterpolationTagged>[] = [
    (input) => {
      // matches `${number}%` structurally, but violates Maximum<100>
      input.percent = "150%" as any;
      return ["$input.percent"];
    },
    (input) => {
      // matches `SN-${number}` structurally, but a decimal is not uint32
      input.serial = "SN-1.5" as any;
      return ["$input.serial"];
    },
    (input) => {
      // matches `CODE-${string}` structurally, but two characters is below MinLength<4>
      input.code = "CODE-ab" as any;
      return ["$input.code"];
    },
  ];
}
