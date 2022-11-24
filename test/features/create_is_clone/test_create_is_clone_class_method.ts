import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_class_method = _test_is_clone(
    "class method",
    ClassMethod.generate,
    TSON.createIsClone<ClassMethod>(),
    ClassMethod.SPOILERS,
);
