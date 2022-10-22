import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validate } from "./_test_validate";

export const test_validate_functional_object_union = _test_validate(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    (input) => TSON.validate(input),
    FunctionalTupleUnion.SPOILERS,
);
