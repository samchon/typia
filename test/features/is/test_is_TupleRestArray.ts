import typia from "../../../src";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_is } from "../../internal/_test_is";

export const test_is_TupleRestArray = _test_is(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.is(input),
    TupleRestArray.SPOILERS,
);
