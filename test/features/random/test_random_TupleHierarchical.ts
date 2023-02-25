import typia from "../../../src";

import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_random } from "../internal/_test_random";

export const test_random_TupleHierarchical = _test_random(
    "TupleHierarchical",
    () => typia.random<TupleHierarchical>(),
    typia.createAssert<typia.Primitive<TupleHierarchical>>(),
);
