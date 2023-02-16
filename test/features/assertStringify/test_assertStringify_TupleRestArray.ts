import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TupleRestArray = _test_assertStringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input) => typia.assertStringify(input),
    TupleRestArray.SPOILERS,
);
