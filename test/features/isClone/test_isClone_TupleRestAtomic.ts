import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TupleRestAtomic = _test_isClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.isClone(input),
    TupleRestAtomic.SPOILERS,
);
