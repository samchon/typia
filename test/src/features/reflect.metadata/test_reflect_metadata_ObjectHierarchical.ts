import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectHierarchical } from "../../structures/ObjectHierarchical";

export const test_reflect_metadata_ObjectHierarchical = (): void =>
  _test_reflect_metadata("ObjectHierarchical")(
    typia.reflect.metadata<[ObjectHierarchical]>(),
  );
