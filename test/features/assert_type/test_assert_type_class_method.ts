import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert_type } from "../internal/_test_assert_type";

export const test_assert_type_class_method = _test_assert_type(
    "class method",
    ClassMethod.generate,
    (input) => TSON.assertType(input),
    ClassMethod.SPOILERS,
);
