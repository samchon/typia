import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_TupleRestAtomic = _test_isParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.isParse<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
