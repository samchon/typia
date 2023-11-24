import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectAlias } from "../../structures/ObjectAlias";

export const test_reflect_metadata_ObjectAlias = _test_reflect_metadata(
  "ObjectAlias",
)(typia.reflect.metadata<[ObjectAlias]>());
