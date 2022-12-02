import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_ClassGetter = _test_validate(
    "ClassGetter",
    ClassGetter.generate,
    (input) => TSON.validate(input),
    ClassGetter.SPOILERS,
);
