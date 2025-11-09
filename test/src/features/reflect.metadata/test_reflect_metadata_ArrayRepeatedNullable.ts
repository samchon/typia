import typia from "typia";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayRepeatedNullable = (): void =>
  _test_reflect_metadata("ArrayRepeatedNullable")(
    typia.reflect.metadata<[ArrayRepeatedNullable]>()
  );