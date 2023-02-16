import typia from "typia";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isPrune } from "../internal/_test_isPrune";

export const test_isPrune_TupleRestObject = _test_isPrune(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.isPrune(input),
    TupleRestObject.SPOILERS,
);
