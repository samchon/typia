import typia from "../../../src";

import { _test_assert } from "../../internal/_test_assert";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_createAssert_DynamicConstant = _test_assert(
    "DynamicConstant",
)<DynamicConstant>(
    DynamicConstant
)(typia.createAssert<DynamicConstant>());
