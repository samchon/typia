import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert_stringify } from "./../assert_stringify/_test_assert_stringify";

export const test_create_assert_stringify_class_getter = _test_assert_stringify(
    "class getter",
    ClassGetter.generate,
    TSON.createAssertStringify<ClassGetter>(),
    ClassGetter.SPOILERS,
);
