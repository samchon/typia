import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_FunctionalTupleUnion = _test_isClone(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => TSON.isClone(input),
    FunctionalTupleUnion.SPOILERS,
);