import typia from "typia";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayHierarchical = (): void =>
  _test_reflect_metadata("ArrayHierarchical")(
    typia.reflect.metadata<[ArrayHierarchical]>()
  );