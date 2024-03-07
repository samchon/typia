import typia from "typia";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayRecursiveUnionExplicit =
  _test_reflect_metadata("ArrayRecursiveUnionExplicit")(
    typia.reflect.metadata<[ArrayRecursiveUnionExplicit]>(),
  );
