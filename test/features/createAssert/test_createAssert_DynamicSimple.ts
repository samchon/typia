import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_createAssert_DynamicSimple = _test_assert(
    "DynamicSimple",
)<DynamicSimple>(DynamicSimple)(typia.createAssert<DynamicSimple>());
