import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_FunctionalTupleUnion = _test_assertClone(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => TSON.assertClone(input),
    FunctionalTupleUnion.SPOILERS,
);