import typia from "typia";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayAny = (): void =>
  _test_reflect_metadata("ArrayAny")(
    typia.reflect.metadata<[ArrayAny]>()
  );