import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_json_isStringify_AtomicIntersection = _test_json_isStringify(
  "AtomicIntersection",
)<AtomicIntersection>(AtomicIntersection)((input) =>
  ((input: AtomicIntersection): string | null => {
    const is = (input: any): input is AtomicIntersection => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        "string" === typeof input[2]
      );
    };
    const stringify = (input: AtomicIntersection): string => {
      const $number = (typia.json.isStringify as any).number;
      const $string = (typia.json.isStringify as any).string;
      return `[${input[0]},${$number(input[1])},${$string(input[2])}]`;
    };
    return is(input) ? stringify(input) : null;
  })(input),
);
