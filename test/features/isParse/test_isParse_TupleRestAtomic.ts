import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_isParse_TupleRestAtomic = _test_isParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.isParse<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
