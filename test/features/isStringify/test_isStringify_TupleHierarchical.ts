import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_isStringify_TupleHierarchical = _test_isStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.isStringify<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);
