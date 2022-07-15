import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validate_for_of } from "./_test_validate_for_of";

export const test_validate_functional_object_union = _test_validate_for_of(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.validate(input),
    // UNABLE TO SPOIL
);
