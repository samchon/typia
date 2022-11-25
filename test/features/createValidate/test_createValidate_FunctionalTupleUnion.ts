import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalTupleUnion = _test_validate(
    "FunctionalTupleUnion",
    FunctionalTupleUnion.generate,
    TSON.createValidate<FunctionalTupleUnion>(),
    FunctionalTupleUnion.SPOILERS,
);
