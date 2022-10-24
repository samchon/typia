import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_class_closure =
    _test_assert_stringify(
        "class closure",
        ClassGetter.generate,
        TSON.createAssertStringify<ClassGetter>(),
        ClassGetter.SPOILERS,
    );
