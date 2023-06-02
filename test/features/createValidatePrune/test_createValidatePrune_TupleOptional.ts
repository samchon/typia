import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createValidatePrune_TupleOptional = _test_validatePrune(
    "TupleOptional",
    TupleOptional.generate,
    typia.createValidatePrune<TupleOptional>(),
    TupleOptional.SPOILERS,
);
