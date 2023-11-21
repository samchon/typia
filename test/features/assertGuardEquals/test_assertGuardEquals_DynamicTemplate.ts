import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertGuardEquals_DynamicTemplate = _test_assertGuardEquals(
  "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)((input) =>
  typia.assertGuardEquals<DynamicTemplate>(input),
);
