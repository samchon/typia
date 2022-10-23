import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is } from "./../is/_test_is";

export const test_create_is_class_getter = _test_is(
    "class getter",
    ClassGetter.generate,
    TSON.createIs<ClassGetter>(),
    ClassGetter.SPOILERS,
);
