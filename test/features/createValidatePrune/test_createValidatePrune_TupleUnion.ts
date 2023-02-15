import typia from "typia";

import { TupleUnion } from "../../structures/TupleUnion";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_createValidatePrune_TupleUnion = _test_validatePrune(
    "TupleUnion",
    TupleUnion.generate,
    typia.createValidatePrune<TupleUnion>(),
    TupleUnion.SPOILERS,
);
