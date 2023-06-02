import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createIsPrune_TupleRestObject = _test_isPrune(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createIsPrune<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
