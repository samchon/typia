import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_class_getter = _test_assert(
    "class getter",
    ClassGetter.generate,
    TSON.createAssertType<ClassGetter>(),
    ClassGetter.SPOILERS,
);
