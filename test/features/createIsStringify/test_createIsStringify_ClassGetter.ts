import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createIsStringify_ClassGetter = _test_isStringify(
    "ClassGetter",
    ClassGetter.generate,
    typia.createIsStringify<ClassGetter>(),
    ClassGetter.SPOILERS,
);
