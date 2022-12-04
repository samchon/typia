import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_createValidateParse_TupleHierarchical = _test_validateParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    TSON.createValidateParse<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
