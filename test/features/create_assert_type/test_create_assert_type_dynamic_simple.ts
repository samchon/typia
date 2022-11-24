import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_dynamic_simple = _test_assert_type(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createAssertType<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
