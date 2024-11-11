import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArraySimple } from "../../structures/ArraySimple";

export const test_reflect_metadata_ArraySimple = _test_reflect_metadata(
  "ArraySimple",
)(typia.reflect.metadata<[ArraySimple]>());
