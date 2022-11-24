import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_create_assert_type_class_getter = _test_assert_type(
    "class getter",
    ClassGetter.generate,
    TSON.createAssertType<ClassGetter>(),
    ClassGetter.SPOILERS,
);
