import typia from "typia";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectUnionExplicitPointer = (): void =>
  _test_reflect_metadata("ObjectUnionExplicitPointer")(
    typia.reflect.metadata<[ObjectUnionExplicitPointer]>()
  );