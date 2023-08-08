import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_is_TupleRestAtomic = _test_is(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createIs<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
