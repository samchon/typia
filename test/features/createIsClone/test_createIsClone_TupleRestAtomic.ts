import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createIsClone_TupleRestAtomic = _test_isClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createIsClone<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
