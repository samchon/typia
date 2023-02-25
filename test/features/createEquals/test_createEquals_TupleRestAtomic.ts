import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_TupleRestAtomic = _test_equals(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    typia.createEquals<TupleRestAtomic>(),
);
