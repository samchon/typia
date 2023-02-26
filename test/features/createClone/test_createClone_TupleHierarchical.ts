import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createClone_TupleHierarchical = _test_clone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createClone<TupleHierarchical>(),
);
