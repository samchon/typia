import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_reflect_metadata_ArrayHierarchical = (): void =>
  _test_reflect_metadata("ArrayHierarchical")(
    typia.reflect.metadata<[ArrayHierarchical]>(),
  );
