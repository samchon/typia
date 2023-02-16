import typia from "typia";

import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TupleRestArray = _test_random(
    "TupleRestArray",
    typia.createRandom<TupleRestArray>(),
    typia.createAssert<typia.Primitive<TupleRestArray>>(),
);
