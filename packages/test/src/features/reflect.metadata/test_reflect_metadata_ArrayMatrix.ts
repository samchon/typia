import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_reflect_metadata_ArrayMatrix = _test_reflect_metadata(
  "ArrayMatrix",
)(typia.reflect.metadata<[ArrayMatrix]>());
