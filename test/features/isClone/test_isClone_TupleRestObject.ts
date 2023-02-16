import typia from "typia";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TupleRestObject = _test_isClone(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.isClone(input),
    TupleRestObject.SPOILERS,
);
