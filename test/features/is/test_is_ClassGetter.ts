import TSON from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_is } from "../internal/_test_is";

export const test_is_ClassGetter = _test_is(
    "ClassGetter",
    ClassGetter.generate,
    (input) => TSON.is(input),
    ClassGetter.SPOILERS,
);