import typia from "typia";
import { ObjectNullable } from "../../structures/ObjectNullable";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectNullable = _test_reflect_metadata(
  "ObjectNullable",
)(typia.reflect.metadata<[ObjectNullable]>());
