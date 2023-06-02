import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertClone_TupleRestAtomic = _test_assertClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createAssertClone<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
