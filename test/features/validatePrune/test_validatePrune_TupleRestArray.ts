import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_validatePrune_TupleRestArray = _test_validatePrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validatePrune<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
