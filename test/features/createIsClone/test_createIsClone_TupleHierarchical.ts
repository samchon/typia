import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createIsClone_TupleHierarchical = _test_isClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createIsClone<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
