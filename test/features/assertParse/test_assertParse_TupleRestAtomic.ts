import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertParse } from "../../internal/_test_assertParse";

export const test_assertParse_TupleRestAtomic = _test_assertParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.assertParse<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
