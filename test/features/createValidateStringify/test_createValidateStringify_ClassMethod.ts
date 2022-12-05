import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ClassMethod = _test_validateStringify(
    "ClassMethod",
    ClassMethod.generate,
    TSON.createValidateStringify<ClassMethod>(),
    ClassMethod.SPOILERS,
);
