import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedRequired } from "../../structures/ArrayRepeatedRequired";

export const test_assertGuard_ArrayRepeatedRequired = _test_assertGuard(
  "ArrayRepeatedRequired",
)<ArrayRepeatedRequired>(ArrayRepeatedRequired)((input) =>
  typia.assertGuard<ArrayRepeatedRequired>(input),
);
