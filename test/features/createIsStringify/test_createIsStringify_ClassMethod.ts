import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_createIsStringify_ClassMethod = _test_isStringify(
    "ClassMethod",
    ClassMethod.generate,
    typia.createIsStringify<ClassMethod>(),
    ClassMethod.SPOILERS,
);
