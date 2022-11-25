import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_TupleHierarchical = _test_clone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createClone<TupleHierarchical>(),
);