import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ClassMethod = _test_validateClone(
    "ClassMethod",
    ClassMethod.generate,
    (input) => TSON.validateClone(input),
    ClassMethod.SPOILERS,
);
