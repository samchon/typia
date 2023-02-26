import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_ClassMethod = _test_validateClone(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.validateClone(input),
    ClassMethod.SPOILERS,
);
