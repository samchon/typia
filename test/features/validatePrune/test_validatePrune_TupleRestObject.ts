import typia from "../../../src";
import { _test_validatePrune } from "../../internal/_test_validatePrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_validatePrune_TupleRestObject = _test_validatePrune(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.validatePrune<TupleRestObject>(input),
    TupleRestObject.SPOILERS,
);
