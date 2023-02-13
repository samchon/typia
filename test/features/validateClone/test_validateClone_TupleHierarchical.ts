import typia from "../../../src";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_validateClone_TupleHierarchical = _test_validateClone(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.validateClone(input),
    TupleHierarchical.SPOILERS,
);