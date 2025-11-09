import typia from "typia";
import { ArrayUnion } from "../../structures/ArrayUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayUnion = (): void =>
  _test_reflect_metadata("ArrayUnion")(
    typia.reflect.metadata<[ArrayUnion]>()
  );