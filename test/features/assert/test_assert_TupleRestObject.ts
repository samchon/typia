import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TupleRestObject = _test_assert(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.assert(input),
    TupleRestObject.SPOILERS,
);
