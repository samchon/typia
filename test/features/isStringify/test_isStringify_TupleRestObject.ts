import typia from "typia";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TupleRestObject = _test_isStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) => typia.isStringify(input),
    TupleRestObject.SPOILERS,
);
