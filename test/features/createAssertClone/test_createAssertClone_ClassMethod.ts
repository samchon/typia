import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createAssertClone_ClassMethod = _test_assertClone(
    "ClassMethod",
    ClassMethod.generate,
    typia.createAssertClone<ClassMethod>(),
    ClassMethod.SPOILERS,
);
