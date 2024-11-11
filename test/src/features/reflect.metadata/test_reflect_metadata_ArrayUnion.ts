import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_reflect_metadata_ArrayUnion = _test_reflect_metadata(
  "ArrayUnion",
)(typia.reflect.metadata<[ArrayUnion]>());
