import typia from "typia";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectUnionExplicit = (): void =>
  _test_reflect_metadata("ObjectUnionExplicit")(
    typia.reflect.metadata<[ObjectUnionExplicit]>()
  );