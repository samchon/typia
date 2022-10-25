import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_class_method = _test_is_stringify(
    "class method",
    ClassMethod.generate,
    TSON.createIsStringify<ClassMethod>(),
    ClassMethod.SPOILERS,
);
