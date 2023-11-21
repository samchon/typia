import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_assertGuard_DynamicSimple = _test_assertGuard(
  "DynamicSimple",
)<DynamicSimple>(DynamicSimple)((input) =>
  typia.assertGuard<DynamicSimple>(input),
);
