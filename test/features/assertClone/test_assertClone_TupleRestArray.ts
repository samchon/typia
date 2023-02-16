import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_assertClone_TupleRestArray = _test_assertClone(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assertClone(input),
    TupleRestArray.SPOILERS,
);
