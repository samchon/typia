import TSON from "../../../src";
import { ClassMethod } from "../../structures/ClassMethod";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_ClassMethod = _test_assert(
    "ClassMethod",
    ClassMethod.generate,
    (input) => TSON.assert(input),
    ClassMethod.SPOILERS,
);
