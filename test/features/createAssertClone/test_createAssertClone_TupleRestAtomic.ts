import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_TupleRestAtomic = _test_assertClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    TSON.createAssertClone<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
