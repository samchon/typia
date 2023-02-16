import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TupleRestArray = _test_validateParse(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.validateParse<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
