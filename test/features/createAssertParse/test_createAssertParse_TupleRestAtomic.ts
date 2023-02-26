import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createAssertParse_TupleRestAtomic = _test_assertParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createAssertParse<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
