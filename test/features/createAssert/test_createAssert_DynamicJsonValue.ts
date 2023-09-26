import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createAssert_DynamicJsonValue = _test_assert(
    "DynamicJsonValue",
)<DynamicJsonValue>(DynamicJsonValue)(typia.createAssert<DynamicJsonValue>());
