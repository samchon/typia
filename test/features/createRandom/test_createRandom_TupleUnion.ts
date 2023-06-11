import typia from "../../../src";

import { TupleUnion } from "../../structures/TupleUnion";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_TupleUnion = _test_random(
    "TupleUnion",
    typia.createRandom<TupleUnion>(),
typia.createAssert<typia.Primitive<TupleUnion>>(),
);
