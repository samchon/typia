import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_validateClone_ClassMethod = _test_validateClone(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.validateClone<ClassMethod>(input),
    ClassMethod.SPOILERS,
);
