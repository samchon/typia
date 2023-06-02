import typia from "../../../src";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_isClone } from "../../internal/_test_isClone";

export const test_isClone_TupleRestArray = _test_isClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.isClone(input),
    TupleRestArray.SPOILERS,
);
