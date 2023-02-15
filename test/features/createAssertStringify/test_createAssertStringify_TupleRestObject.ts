import typia from "typia";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_createAssertStringify_TupleRestObject = _test_assertStringify(
    "TupleRestObject",
    TupleRestObject.generate,
    typia.createAssertStringify<TupleRestObject>(),
    TupleRestObject.SPOILERS,
);
