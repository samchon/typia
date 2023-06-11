import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_TupleRestAtomic = _test_stringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createStringify<TupleRestAtomic>(),
);
