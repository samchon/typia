import typia from "../../../src";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_isParse } from "../../internal/_test_isParse";

export const test_createIsParse_TupleRestArray = _test_isParse(
    "TupleRestArray",
    TupleRestArray.generate,
    typia.createIsParse<TupleRestArray>(),
    TupleRestArray.SPOILERS,
);
