import typia from "typia";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectUnionDouble = _test_reflect_metadata(
  "ObjectUnionDouble",
)(typia.reflect.metadata<[ObjectUnionDouble]>());
