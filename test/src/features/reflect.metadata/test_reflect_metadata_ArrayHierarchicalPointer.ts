import typia from "typia";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayHierarchicalPointer =
  _test_reflect_metadata("ArrayHierarchicalPointer")(
    typia.reflect.metadata<[ArrayHierarchicalPointer]>(),
  );
