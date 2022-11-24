import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_class_getter = _test_assert_clone(
    "class getter",
    ClassGetter.generate,
    TSON.createAssertClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);
