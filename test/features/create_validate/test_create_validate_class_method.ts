import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validate } from "../internal/_test_validate";

export const test_create_validate_class_method = _test_validate(
    "class method",
    ClassMethod.generate,
    TSON.createValidate<ClassMethod>(),
    ClassMethod.SPOILERS,
);
