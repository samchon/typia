import typia from "../../../src";

import { TupleOptional } from "../../structures/TupleOptional";
import { _test_random } from "../../internal/_test_random";

export const test_random_TupleOptional = _test_random(
    "TupleOptional",
    () => typia.random<TupleOptional>(),
typia.createAssert<typia.Primitive<TupleOptional>>(),
);
