import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_isStringify_TupleRestAtomic = _test_isStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.isStringify(input),
    TupleRestAtomic.SPOILERS,
);
