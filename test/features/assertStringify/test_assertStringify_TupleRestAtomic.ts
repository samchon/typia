import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_TupleRestAtomic = _test_assertStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.assertStringify(input),
    TupleRestAtomic.SPOILERS,
);
