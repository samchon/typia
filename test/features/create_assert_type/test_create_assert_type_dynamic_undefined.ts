import TSON from "../../../src";
import { DynamicUndefined } from "../../structures/DynamicUndefined";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_dynamic_undefined = _test_assert_type(
    "dynamic tree",
    DynamicUndefined.generate,
    TSON.createAssertType<DynamicUndefined>(),
    DynamicUndefined.SPOILERS,
);
