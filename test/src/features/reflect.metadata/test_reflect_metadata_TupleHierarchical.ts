import typia from "typia";
import { TupleHierarchical } from "../../structures/TupleHierarchical";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TupleHierarchical = _test_reflect_metadata(
  "TupleHierarchical",
)(typia.reflect.metadata<[TupleHierarchical]>());
