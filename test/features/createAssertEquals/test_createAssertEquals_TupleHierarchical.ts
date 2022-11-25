import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_createAssertEquals_TupleHierarchical = _test_assertEquals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createAssertEquals<TupleHierarchical>(),
);
