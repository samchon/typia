import typia from "typia";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectGeneric = _test_reflect_metadata(
  "ObjectGeneric",
)(typia.reflect.metadata<[ObjectGeneric]>());
