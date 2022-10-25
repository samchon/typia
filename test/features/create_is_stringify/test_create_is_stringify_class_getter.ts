import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_class_getter = _test_is_stringify(
    "class getter",
    ClassGetter.generate,
    TSON.createIsStringify<ClassGetter>(),
    ClassGetter.SPOILERS,
);
