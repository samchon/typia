import typia from "../../../src";
import { _test_assertParse } from "../../internal/_test_assertParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createAssertParse_TupleHierarchical = _test_assertParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createAssertParse<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
