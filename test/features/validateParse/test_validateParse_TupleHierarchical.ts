import typia from "../../../src";
import { _test_validateParse } from "../../internal/_test_validateParse";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_validateParse_TupleHierarchical = _test_validateParse(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.validateParse<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);
