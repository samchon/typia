import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_reflect_metadata_ObjectDescription = _test_reflect_metadata(
  "ObjectDescription",
)(typia.reflect.metadata<[ObjectDescription]>());
