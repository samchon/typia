import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_assertGuard_UltimateUnion = _test_assertGuard(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)((input) =>
  typia.assertGuard<UltimateUnion>(input),
);
