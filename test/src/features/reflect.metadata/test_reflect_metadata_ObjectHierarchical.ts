import typia from "typia";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ObjectHierarchical = (): void =>
  _test_reflect_metadata("ObjectHierarchical")(
    typia.reflect.metadata<[ObjectHierarchical]>()
  );