import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_validatePrune_TupleRestAtomic = _test_validatePrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validatePrune<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
