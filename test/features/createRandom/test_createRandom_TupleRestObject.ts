import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_TupleRestObject = _test_random(
    "TupleRestObject",
    typia.createRandom<TupleRestObject>(),
typia.createAssert<typia.Primitive<TupleRestObject>>(),
);
