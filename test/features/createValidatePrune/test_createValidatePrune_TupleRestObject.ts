import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createValidatePrune_TupleRestObject = _test_validatePrune(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createValidatePrune<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
