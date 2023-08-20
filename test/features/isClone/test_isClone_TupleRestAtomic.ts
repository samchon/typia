import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_isClone_TupleRestAtomic = _test_isClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) => typia.isClone<TupleRestAtomic>(input),
    TupleRestAtomic.SPOILERS,
);
