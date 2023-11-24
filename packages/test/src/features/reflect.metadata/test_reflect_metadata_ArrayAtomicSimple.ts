import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_reflect_metadata_ArrayAtomicSimple = _test_reflect_metadata(
  "ArrayAtomicSimple",
)(typia.reflect.metadata<[ArrayAtomicSimple]>());
