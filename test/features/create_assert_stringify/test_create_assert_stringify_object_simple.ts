import TSON from "../../../src";
import { ObjectSimple } from "../../structures/ObjectSimple";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_create_assert_stringify_object_simple =
    _test_assert_stringify(
        "simple object",
        ObjectSimple.generate,
        TSON.createAssertStringify<ObjectSimple>(),
        ObjectSimple.SPOILERS,
    );
