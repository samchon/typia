import typia from "../../../src";
import { _test_assertPrune } from "../../internal/_test_assertPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_assertPrune_TupleRestObject = _test_assertPrune(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.assertPrune(input),
    TupleRestObject.SPOILERS,
);
