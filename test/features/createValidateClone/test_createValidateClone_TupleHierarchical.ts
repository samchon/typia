import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_TupleHierarchical = _test_validateClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createValidateClone<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
