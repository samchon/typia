import typia from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_random } from "../internal/_test_random";

export const test_createRandom_TupleHierarchical = _test_random(
    "TupleHierarchical",
    typia.createRandom<TupleHierarchical>(),
    typia.createAssert<typia.Primitive<TupleHierarchical>>(),
);