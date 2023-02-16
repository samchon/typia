import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TupleRestArray = _test_validateParse(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createValidateParse<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
