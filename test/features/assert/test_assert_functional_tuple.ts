import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_functional_tuple = _test_assert(
    "functional tuple",
    FunctionalTuple.generate,
    (input) => TSON.assert(input),
    FunctionalTuple.SPOILERS,
);
