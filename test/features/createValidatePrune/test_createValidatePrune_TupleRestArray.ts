import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_createValidatePrune_TupleRestArray = _test_validatePrune(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createValidatePrune<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
