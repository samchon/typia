import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert_clone } from "../internal/_test_assert_clone";

export const test_create_assert_clone_class_method = _test_assert_clone(
    "class method",
    ClassMethod.generate,
    TSON.createAssertClone<ClassMethod>(),
    ClassMethod.SPOILERS,
);
