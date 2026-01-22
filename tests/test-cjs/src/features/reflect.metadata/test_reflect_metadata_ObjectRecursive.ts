import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ObjectRecursive } from "../../structures/ObjectRecursive";

export const test_reflect_metadata_ObjectRecursive = (): void =>
  _test_reflect_metadata("ObjectRecursive")(
    typia.reflect.metadata<[ObjectRecursive]>(),
  );
