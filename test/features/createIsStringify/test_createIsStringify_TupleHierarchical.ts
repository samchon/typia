import typia from "../../../src";
import { _test_isStringify } from "../../internal/_test_isStringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createIsStringify_TupleHierarchical = _test_isStringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createIsStringify<TupleHierarchical>(),
    TupleHierarchical.SPOILERS,
);
