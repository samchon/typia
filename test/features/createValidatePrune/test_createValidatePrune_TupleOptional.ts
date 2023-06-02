import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_TupleOptional = _test_validatePrune(
    "TupleOptional",
    TupleOptional.generate,
    typia.createValidatePrune<TupleOptional>(),
    TupleOptional.SPOILERS,
);
