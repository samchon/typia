import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validate } from "./_test_validate";

export const test_validate_class_getter = _test_validate(
    "class getter",
    ClassGetter.generate,
    (input) => TSON.validate(input),
    ClassGetter.SPOILERS,
);
