import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_is_stringify_class_method = _test_is_stringify(
    "class method",
    ClassMethod.generate,
    (input) => TSON.isStringify(input),
    ClassMethod.SPOILERS,
);
