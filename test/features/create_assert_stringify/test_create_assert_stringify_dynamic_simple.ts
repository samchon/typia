import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_dynamic_simple =
    _test_assert_stringify(
        "dynamic simple",
        DynamicSimple.generate,
        TSON.createAssertStringify<DynamicSimple>(),
        DynamicSimple.SPOILERS,
    );
