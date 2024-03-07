import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
export const test_misc_isPrune_ConstantIntersection = _test_misc_isPrune(
  "ConstantIntersection",
)<ConstantIntersection>(ConstantIntersection)((input) =>
  ((input: any): input is ConstantIntersection => {
    const is = (input: any): input is ConstantIntersection => {
      return (
        Array.isArray(input) &&
        input.length === 3 &&
        false === input[0] &&
        1 === input[1] &&
        "two" === input[2]
      );
    };
    const prune = (input: ConstantIntersection): void => {};
    if (!is(input)) return false;
    prune(input);
    return true;
  })(input),
);
