import TSON from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TupleRestAtomic = _test_isParse(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    TSON.createIsParse<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
