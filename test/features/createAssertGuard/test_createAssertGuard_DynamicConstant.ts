import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssertGuard_DynamicConstant = _test_assertGuard(
    "DynamicConstant",
)<DynamicConstant>(DynamicConstant)(typia.createAssertGuard<DynamicConstant>());
