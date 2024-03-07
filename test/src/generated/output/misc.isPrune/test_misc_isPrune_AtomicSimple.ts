import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_misc_isPrune_AtomicSimple = _test_misc_isPrune(
  "AtomicSimple",
)<AtomicSimple>(AtomicSimple)((input) =>
  ((input: any): input is AtomicSimple => {
    const is = (input: any): input is AtomicSimple => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        "boolean" === typeof input[0] &&
        "number" === typeof input[1] &&
        Number.isFinite(input[1]) &&
        "string" === typeof input[2]
      );
    };
    const prune = (input: AtomicSimple): void => {};
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
