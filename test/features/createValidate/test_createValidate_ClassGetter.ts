import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ClassGetter = _test_validate(
    "ClassGetter",
    ClassGetter.generate,
    TSON.createValidate<ClassGetter>(),
    ClassGetter.SPOILERS,
);
