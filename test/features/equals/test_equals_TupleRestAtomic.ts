import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_equals } from "../internal/_test_equals";

export const test_equals_TupleRestAtomic = _test_equals(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.equals(input),
);
