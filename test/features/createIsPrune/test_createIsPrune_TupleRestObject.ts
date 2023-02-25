import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_createIsPrune_TupleRestObject = _test_isPrune(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createIsPrune<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
