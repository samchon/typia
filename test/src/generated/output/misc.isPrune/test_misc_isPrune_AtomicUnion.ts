import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { AtomicUnion } from "../../../structures/AtomicUnion";
export const test_misc_isPrune_AtomicUnion = _test_misc_isPrune(
  "AtomicUnion",
)<AtomicUnion>(AtomicUnion)((input) =>
  ((input: any): input is AtomicUnion => {
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
    const prune = (input: AtomicUnion): void => {};
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
