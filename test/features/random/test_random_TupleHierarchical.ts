import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_random_TupleHierarchical = _test_random(
    "TupleHierarchical",
    () => typia.random<TupleHierarchical>(),
    typia.createAssert<typia.Primitive<TupleHierarchical>>(),
);
