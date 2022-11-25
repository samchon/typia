import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert_stringify } from "../internal/_test_assert_stringify";

export const test_assert_stringify_class_method = _test_assert_stringify(
    "class method",
    ClassMethod.generate,
    (input) => TSON.assertStringify(input),
    ClassMethod.SPOILERS,
);
