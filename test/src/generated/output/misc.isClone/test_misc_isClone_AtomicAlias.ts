import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_misc_isClone_AtomicAlias = _test_misc_isClone(
  "AtomicAlias",
)<AtomicAlias>(AtomicAlias)((input) =>
  ((input: any): import("typia").Resolved<AtomicAlias> | null => {
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
    const clone = (
      input: AtomicAlias,
    ): import("typia").Resolved<AtomicAlias> => {
      return Array.isArray(input) &&
        input.length === 3 &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        "string" === typeof input[2]
        ? ([input[0] as any, input[1] as any, input[2] as any] as any)
        : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  })(input),
);
