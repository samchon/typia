import typia from "typia";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayRecursiveUnionImplicit =
  _test_reflect_metadata("ArrayRecursiveUnionImplicit")(
    typia.reflect.metadata<[ArrayRecursiveUnionImplicit]>(),
  );
