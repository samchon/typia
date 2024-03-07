import typia from "typia";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayAtomicAlias = _test_reflect_metadata(
  "ArrayAtomicAlias",
)(typia.reflect.metadata<[ArrayAtomicAlias]>());
