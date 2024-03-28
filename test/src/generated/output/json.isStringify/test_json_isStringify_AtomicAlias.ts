import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_json_isStringify_AtomicAlias = _test_json_isStringify(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input) =>
  ((input: AtomicAlias): string | null => {
    const is = (input: any): input is AtomicAlias => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        "string" === typeof input[2]
      );
    };
    const stringify = (input: AtomicAlias): string => {
      const $number = (typia.json.isStringify as any).number;
      const $string = (typia.json.isStringify as any).string;
      return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
