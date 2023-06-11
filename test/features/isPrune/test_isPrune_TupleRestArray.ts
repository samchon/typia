import typia from "../../../src";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_isPrune } from "../../internal/_test_isPrune";

export const test_isPrune_TupleRestArray = _test_isPrune(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.isPrune(input),
    TupleRestArray.SPOILERS,
);
