import typia from "../../../src";
import { _test_assertStringify } from "../../internal/_test_assertStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_assertStringify_TupleHierarchical = _test_assertStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    (input) => typia.assertStringify<TupleHierarchical>(input),
    TupleHierarchical.SPOILERS,
);
