import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_FunctionalTupleUnion = _test_validateClone(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    (input) => TSON.validateClone(input),
    FunctionalTupleUnion.SPOILERS,
);
