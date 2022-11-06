import TSON from "../../../src";
import { DynamicSimple } from "../../structures/DynamicSimple";
import { _test_assert_clone } from "./../assert_clone/_test_assert_clone";

export const test_create_assert_clone_dynamic_simple =
    _test_assert_clone(
        "dynamic simple",
        DynamicSimple.generate,
        TSON.createAssertClone<DynamicSimple>(),
        DynamicSimple.SPOILERS,
    );
