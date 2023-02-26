import typia from "../../../src";
import { _test_validateClone } from "../../internal/_test_validateClone";
import { ClassGetter } from "../../structures/ClassGetter";

export const test_createValidateClone_ClassGetter = _test_validateClone(
    "ClassGetter",
    ClassGetter.generate,
    typia.createValidateClone<ClassGetter>(),
    ClassGetter.SPOILERS,
);
