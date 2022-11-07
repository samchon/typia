import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert } from "./_test_assert";

export const test_assert_class_method = _test_assert(
    "class method",
    ClassMethod.generate,
    (input) => TSON.assert(input),
    ClassMethod.SPOILERS,
);
