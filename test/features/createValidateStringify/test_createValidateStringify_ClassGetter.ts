import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_ClassGetter = _test_validateStringify(
    "ClassGetter",
    ClassGetter.generate,
    typia.createValidateStringify<ClassGetter>(),
    ClassGetter.SPOILERS,
);
