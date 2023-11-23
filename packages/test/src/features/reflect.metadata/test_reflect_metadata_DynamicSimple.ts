import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_reflect_metadata_DynamicSimple = _test_reflect_metadata(
  "DynamicSimple",
)(typia.reflect.metadata<[DynamicSimple]>());
