import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_functional_object_union = _test_validate(
    "functional union tuple",
    FunctionalTupleUnion.generate,
    TSON.createValidate<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
