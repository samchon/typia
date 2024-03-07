import typia from "typia";
import { ObjectAlias } from "../../structures/ObjectAlias";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectAlias = _test_reflect_metadata(
  "ObjectAlias",
)(typia.reflect.metadata<[ObjectAlias]>());
