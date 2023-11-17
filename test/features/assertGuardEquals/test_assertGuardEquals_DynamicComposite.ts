import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertGuardEquals_DynamicComposite = _test_assertGuardEquals(
  "DynamicComposite",
)<DynamicComposite>(DynamicComposite)((input) =>
  typia.assertGuardEquals<DynamicComposite>(input),
);
