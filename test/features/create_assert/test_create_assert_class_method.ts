import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert } from "./../assert/_test_assert";

export const test_create_assert_class_method = _test_assert(
    "class method",
    ClassMethod.generate,
    TSON.createAssert<ClassMethod>(),
    ClassMethod.SPOILERS,
);
