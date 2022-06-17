import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_is } from "./_test_is";

export const test_is_class_method = _test_is(
    "class method",
    ClassMethod.generate,
    (input) => TSON.is(input),
);
