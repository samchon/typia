import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_isClone_ClassMethod = _test_isClone(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.isClone<ClassMethod>(input),
    ClassMethod.SPOILERS,
);
