import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_reflect_metadata_DynamicArray = _test_reflect_metadata(
  "DynamicArray",
)(typia.reflect.metadata<[DynamicArray]>());
