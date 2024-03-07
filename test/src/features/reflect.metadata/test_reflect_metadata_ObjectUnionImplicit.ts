import typia from "typia";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectUnionImplicit = _test_reflect_metadata(
  "ObjectUnionImplicit",
)(typia.reflect.metadata<[ObjectUnionImplicit]>());
