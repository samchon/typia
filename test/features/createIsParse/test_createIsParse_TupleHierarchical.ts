import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_TupleHierarchical = _test_isParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createIsParse<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
