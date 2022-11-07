import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_undefined = _test_assert(
    "dynamic tree",
    DynamicUndefined.generate,
    TSON.createAssert<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
