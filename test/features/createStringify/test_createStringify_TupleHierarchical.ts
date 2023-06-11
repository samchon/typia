import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_createStringify_TupleHierarchical = _test_stringify(
    "TupleHierarchical",
    TupleHierarchical.generate,
    typia.createStringify<TupleHierarchical>(),
);
