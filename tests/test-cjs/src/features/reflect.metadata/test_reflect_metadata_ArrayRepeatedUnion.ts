import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_reflect_metadata_ArrayRepeatedUnion = (): void =>
  _test_reflect_metadata("ArrayRepeatedUnion")(
    typia.reflect.metadata<[ArrayRepeatedUnion]>(),
  );
