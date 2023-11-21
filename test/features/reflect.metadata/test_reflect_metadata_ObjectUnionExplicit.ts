import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_reflect_metadata_ObjectUnionExplicit = _test_reflect_metadata(
  "ObjectUnionExplicit",
)(typia.reflect.metadata<[ObjectUnionExplicit]>());
