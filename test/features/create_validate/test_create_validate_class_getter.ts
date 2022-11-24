import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_class_getter = _test_validate(
    "class getter",
    ClassGetter.generate,
    TSON.createValidate<ClassGetter>(),
    ClassGetter.SPOILERS,
);
