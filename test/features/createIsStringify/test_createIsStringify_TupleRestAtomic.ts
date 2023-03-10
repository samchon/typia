import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createIsStringify_TupleRestAtomic = _test_isStringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createIsStringify<TupleRestAtomic>(),
    TupleRestAtomic.SPOILERS,
);
