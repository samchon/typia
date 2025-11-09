import typia from "typia";
import { ArrayRecursive } from "../../structures/ArrayRecursive";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayRecursive = (): void =>
  _test_reflect_metadata("ArrayRecursive")(
    typia.reflect.metadata<[ArrayRecursive]>()
  );