import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_FunctionalTupleUnion = _test_assert(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => TSON.assert(input),
    FunctionalTupleUnion.SPOILERS,
);