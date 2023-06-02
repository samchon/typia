import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validatePrune } from "../../internal/_test_validatePrune";

export const test_createValidatePrune_TupleRestAtomic = _test_validatePrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createValidatePrune<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
