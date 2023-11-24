import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_reflect_metadata_ObjectHttpArray = _test_reflect_metadata(
  "ObjectHttpArray",
)(typia.reflect.metadata<[ObjectHttpArray]>());
