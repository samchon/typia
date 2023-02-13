import typia from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ClassMethod = _test_isClone(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.isClone(input),
    ClassMethod.SPOILERS,
);