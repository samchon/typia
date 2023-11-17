import typia from "../../../src";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_reflect_metadata_ArrayRecursiveUnionExplicit =
  _test_reflect_metadata("ArrayRecursiveUnionExplicit")(
    typia.reflect.metadata<[ArrayRecursiveUnionExplicit]>(),
  );
