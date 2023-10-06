import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createAssert_DynamicNever = _test_assert(
    "DynamicNever",
)<DynamicNever>(DynamicNever)(typia.createAssert<DynamicNever>());
