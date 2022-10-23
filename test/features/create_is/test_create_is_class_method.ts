import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_is } from "./../is/_test_is";

export const test_create_is_class_method = _test_is(
    "class method",
    ClassMethod.generate,
    TSON.createIs<ClassMethod>(),
    ClassMethod.SPOILERS,
);
