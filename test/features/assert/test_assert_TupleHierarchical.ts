import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_TupleHierarchical = _test_assert(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => TSON.assert(input),
    TupleHierarchical.SPOILERS,
);
