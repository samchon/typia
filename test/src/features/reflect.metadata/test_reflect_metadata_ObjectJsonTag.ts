import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_reflect_metadata_ObjectJsonTag = _test_reflect_metadata(
  "ObjectJsonTag",
)(typia.reflect.metadata<[ObjectJsonTag]>());
