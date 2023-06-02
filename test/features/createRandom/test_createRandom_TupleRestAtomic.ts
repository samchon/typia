import typia from "../../../src";

import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_TupleRestAtomic = _test_random(
    "TupleRestAtomic",
    typia.createRandom<TupleRestAtomic>(),
typia.createAssert<typia.Primitive<TupleRestAtomic>>(),
);
