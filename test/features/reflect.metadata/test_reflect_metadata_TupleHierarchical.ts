import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_reflect_metadata_TupleHierarchical = _test_reflect_metadata(
    "TupleHierarchical",
)(typia.reflect.metadata<[TupleHierarchical]>());
