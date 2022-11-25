import TSON from "../../../src";
import { FunctionalArray } from "../../structures/FunctionalArray";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_functional_array = _test_assert(
    "functional array",
    FunctionalArray.generate,
    (input) => TSON.assert(input),
    FunctionalArray.SPOILERS,
);
