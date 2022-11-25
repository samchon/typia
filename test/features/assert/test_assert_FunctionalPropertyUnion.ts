import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalPropertyUnion = _test_assert(
    "FunctionalPropertyUnion",
    FunctionalPropertyUnion.generate,
    (input) => TSON.assert(input),
    FunctionalPropertyUnion.SPOILERS,
);