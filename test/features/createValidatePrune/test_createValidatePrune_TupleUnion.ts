import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_createValidatePrune_TupleUnion = _test_validatePrune(
    "TupleUnion",
    TupleUnion.generate,
    typia.createValidatePrune<TupleUnion>(),
    TupleUnion.SPOILERS,
);
