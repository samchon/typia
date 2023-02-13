import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_TupleRestAtomic = _test_isClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createIsClone<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);