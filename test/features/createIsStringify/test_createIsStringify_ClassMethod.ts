import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_ClassMethod = _test_isStringify(
    "ClassMethod",
    ClassMethod.generate,
    TSON.createIsStringify<ClassMethod>(),
    ClassMethod.SPOILERS,
);
