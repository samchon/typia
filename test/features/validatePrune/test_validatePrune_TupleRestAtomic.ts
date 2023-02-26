import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TupleRestAtomic = _test_validatePrune(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.validatePrune(input),
    TupleRestAtomic.SPOILERS,
);
