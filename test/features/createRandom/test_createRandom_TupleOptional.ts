import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_random } from "../../internal/_test_random";

export const test_createRandom_TupleOptional = _test_random(
    "TupleOptional",
    typia.createRandom<TupleOptional>(),
typia.createAssert<typia.Primitive<TupleOptional>>(),
);
