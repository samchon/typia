import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_is } from "../internal/_test_is";

export const test_createIs_TupleHierarchical = _test_is(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createIs<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);