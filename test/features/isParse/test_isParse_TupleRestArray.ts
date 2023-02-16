import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TupleRestArray = _test_isParse(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.isParse<TupleRestArray>(input),
    TupleRestArray.SPOILERS,
);
