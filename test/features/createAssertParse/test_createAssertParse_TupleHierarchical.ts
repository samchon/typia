import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertParse } from "../internal/_test_assertParse";

export const test_createAssertParse_TupleHierarchical = _test_assertParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createAssertParse<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
