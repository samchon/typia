import typia from "../../../src";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_assertGuardEquals_DynamicConstant = _test_assertGuardEquals(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)((input) =>
    typia.assertGuardEquals<DynamicConstant>(input),
);
