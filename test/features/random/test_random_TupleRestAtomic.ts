import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_random } from "../../internal/_test_random";

export const test_random_TupleRestAtomic = _test_random(
    "TupleRestAtomic",
    () => typia.random<TupleRestAtomic>(),
typia.createAssert<typia.Primitive<TupleRestAtomic>>(),
);
