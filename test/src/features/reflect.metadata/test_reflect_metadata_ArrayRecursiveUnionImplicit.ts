import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_reflect_metadata_ArrayRecursiveUnionImplicit = (): void =>
  _test_reflect_metadata("ArrayRecursiveUnionImplicit")(
    typia.reflect.metadata<[ArrayRecursiveUnionImplicit]>(),
  );
