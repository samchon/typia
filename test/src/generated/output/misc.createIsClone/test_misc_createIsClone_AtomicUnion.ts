import typia from "typia";

import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_misc_createIsClone_AtomicUnion = _test_misc_isClone(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)(
  (input: any): typia.Resolved<AtomicUnion> | null => {
    const is = (input: any): input is AtomicUnion => {
      return (
        Array.isArray(input) &&
        input.every(
          (elem: any) =>
            null === elem ||
            "string" === typeof elem ||
            ("number" === typeof elem && Number.isFinite(elem)) ||
            "boolean" === typeof elem,
        )
      );
    };
    const clone = (input: AtomicUnion): typia.Resolved<AtomicUnion> => {
      const $cp0 = (input: any) => input.map((elem: any) => elem as any);
      return Array.isArray(input) ? $cp0(input) : (input as any);
    };
    if (!is(input)) return null;
    const output = clone(input);
    return output;
  },
);
