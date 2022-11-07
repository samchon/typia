import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert_type } from "./../assert_type/_test_assert_type";

export const test_create_assert_type_class_method = _test_assert_type(
    "class method",
    ClassMethod.generate,
    TSON.createAssertType<ClassMethod>(),
    ClassMethod.SPOILERS,
);
