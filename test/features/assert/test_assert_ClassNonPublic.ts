import TSON from "../../../src";
import { ClassNonPublic } from "../../structures/ClassNonPublic";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ClassNonPublic = _test_assert(
    "ClassNonPublic",
    ClassNonPublic.generate,
    (input) => TSON.assert(input),
    ClassNonPublic.SPOILERS,
);