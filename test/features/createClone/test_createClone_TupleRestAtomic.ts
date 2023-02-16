import typia from "typia";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TupleRestAtomic = _test_clone(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createClone<TupleRestAtomic>(),
);
