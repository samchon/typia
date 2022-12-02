import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_FunctionalTupleUnion = _test_equals(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => TSON.equals(input),
);
