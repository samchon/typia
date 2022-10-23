import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_dynamic_simple = _test_assert(
    "dynamic simple",
    DynamicSimple.generate,
    TSON.createAssertType<DynamicSimple>(),
    DynamicSimple.SPOILERS,
);
