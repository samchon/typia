import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_reflect_metadata_ObjectPartial = _test_reflect_metadata(
  "ObjectPartial",
)(typia.reflect.metadata<[ObjectPartial]>());
