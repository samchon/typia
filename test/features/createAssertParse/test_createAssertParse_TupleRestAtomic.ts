import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TupleRestAtomic = _test_assertParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createAssertParse<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
