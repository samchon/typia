import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_clone } from "../internal/_test_clone";

export const test_clone_FunctionalTupleUnion = _test_clone(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => TSON.clone(input),
);