import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalArray = _test_assert(
    "FunctionalArray",
    FunctionalArray.generate,
    (input) => TSON.assert(input),
    FunctionalArray.SPOILERS,
);
