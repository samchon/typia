import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createValidatePrune_TupleRestAtomic = _test_validatePrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createValidatePrune<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
