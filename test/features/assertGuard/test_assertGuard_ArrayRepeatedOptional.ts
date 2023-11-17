import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_assertGuard_ArrayRepeatedOptional = _test_assertGuard(
  "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(ArrayRepeatedOptional)((input) =>
  typia.assertGuard<ArrayRepeatedOptional>(input),
);
