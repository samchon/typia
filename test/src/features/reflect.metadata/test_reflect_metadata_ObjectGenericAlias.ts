import typia from "typia";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectGenericAlias = _test_reflect_metadata(
  "ObjectGenericAlias",
)(typia.reflect.metadata<[ObjectGenericAlias]>());
