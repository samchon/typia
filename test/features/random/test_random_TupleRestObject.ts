import typia from "../../../src";

import { TupleRestObject } from "../../structures/TupleRestObject";
import { _test_random } from "../internal/_test_random";

export const test_random_TupleRestObject = _test_random(
    "TupleRestObject",
    () => typia.random<TupleRestObject>(),
    typia.createAssert<typia.Primitive<TupleRestObject>>(),
);
