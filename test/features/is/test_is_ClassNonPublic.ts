import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_is } from "../internal/_test_is";

export const test_is_ClassNonPublic = _test_is(
    "ClassNonPublic",
    ClassNonPublic.generate,
    (input) => TSON.is(input),
    ClassNonPublic.SPOILERS,
);
