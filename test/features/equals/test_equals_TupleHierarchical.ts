import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_equals_TupleHierarchical = _test_equals(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.equals(input),
);
