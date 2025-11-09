import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRecursiveUnionExplicitPointer } from "../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_reflect_metadata_ArrayRecursiveUnionExplicitPointer =
  (): void =>
    _test_reflect_metadata("ArrayRecursiveUnionExplicitPointer")(
      typia.reflect.metadata<[ArrayRecursiveUnionExplicitPointer]>(),
    );
