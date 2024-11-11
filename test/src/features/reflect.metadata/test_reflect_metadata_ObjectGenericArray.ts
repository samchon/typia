import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_reflect_metadata_ObjectGenericArray = _test_reflect_metadata(
  "ObjectGenericArray",
)(typia.reflect.metadata<[ObjectGenericArray]>());
