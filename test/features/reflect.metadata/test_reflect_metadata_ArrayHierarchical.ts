import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_reflect_metadata_ArrayHierarchical = _test_reflect_metadata(
  "ArrayHierarchical",
)(typia.reflect.metadata<[ArrayHierarchical]>());
