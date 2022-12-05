import TSON from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validateParse } from "../internal/_test_validateParse";

export const test_validateParse_TupleHierarchical = _test_validateParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => TSON.validateParse<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);
