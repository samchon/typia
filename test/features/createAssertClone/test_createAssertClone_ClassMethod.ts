import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_ClassMethod = _test_assertClone(
    "ClassMethod",
    ClassMethod.generate,
    TSON.createAssertClone<ClassMethod>(),
    ClassMethod.SPOILERS,
);
