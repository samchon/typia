import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_TupleHierarchical = _test_isClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => TSON.isClone(input),
    TupleHierarchical.SPOILERS,
);