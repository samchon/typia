import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_assertGuard_DynamicUnion = _test_assertGuard(
  "DynamicUnion",
)<DynamicUnion>(DynamicUnion)((input) =>
  typia.assertGuard<DynamicUnion>(input),
);
