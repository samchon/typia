import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertGuard_DynamicTemplate = _test_assertGuard(
    "DynamicTemplate",
)<DynamicTemplate>(DynamicTemplate)(typia.createAssertGuard<DynamicTemplate>());
