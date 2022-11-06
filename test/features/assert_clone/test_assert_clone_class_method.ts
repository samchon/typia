import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert_clone } from "./_test_assert_clone";

export const test_assert_clone_class_method = _test_assert_clone(
    "class method",
    ClassMethod.generate,
    (input) => TSON.assertClone(input),
    ClassMethod.SPOILERS,
);
