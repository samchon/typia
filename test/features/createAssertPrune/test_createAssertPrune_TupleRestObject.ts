import typia from "../../../src";
import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertPrune } from "../internal/_test_assertPrune";

export const test_createAssertPrune_TupleRestObject = _test_assertPrune(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createAssertPrune<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
