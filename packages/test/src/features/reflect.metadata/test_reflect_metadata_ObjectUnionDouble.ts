import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_reflect_metadata_ObjectUnionDouble = _test_reflect_metadata(
  "ObjectUnionDouble",
)(typia.reflect.metadata<[ObjectUnionDouble]>());
