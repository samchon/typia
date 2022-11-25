import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ClassMethod = _test_validate(
    "ClassMethod",
    ClassMethod.generate,
    (input) => TSON.validate(input),
    ClassMethod.SPOILERS,
);