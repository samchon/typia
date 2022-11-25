import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assert } from "../internal/_test_assert";

export const test_createAssert_DynamicUndefined = _test_assert(
    "DynamicUndefined",
    DynamicUndefined.generate,
    TSON.createAssert<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);