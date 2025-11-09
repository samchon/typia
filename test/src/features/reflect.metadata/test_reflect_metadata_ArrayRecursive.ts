import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_reflect_metadata_ArrayRecursive = (): void =>
  _test_reflect_metadata("ArrayRecursive")(
    typia.reflect.metadata<[ArrayRecursive]>(),
  );
