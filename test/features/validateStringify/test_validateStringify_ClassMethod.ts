import typia from "../../../src";
import { _test_validateStringify } from "../../internal/_test_validateStringify";
import { ClassMethod } from "../../structures/ClassMethod";

export const test_validateStringify_ClassMethod = _test_validateStringify(
    "ClassMethod",
    ClassMethod.generate,
    (input) => typia.validateStringify<ClassMethod>(input),
    ClassMethod.SPOILERS,
);
