import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_misc_assertClone_TupleRestAtomic = _test_misc_assertClone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.misc.createAssertClone<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
