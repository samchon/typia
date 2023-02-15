import typia from "typia";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_validatePrune } from "../internal/_test_validatePrune";

export const test_validatePrune_TupleRestObject = _test_validatePrune(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.validatePrune(input),
    TupleRestObject.SPOILERS,
);
