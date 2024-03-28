import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_reflect_metadata_ObjectRequired = _test_reflect_metadata(
  "ObjectRequired",
)(typia.reflect.metadata<[ObjectRequired]>());
