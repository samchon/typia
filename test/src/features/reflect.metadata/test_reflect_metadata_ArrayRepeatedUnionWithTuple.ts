import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_reflect_metadata_ArrayRepeatedUnionWithTuple = (): void =>
  _test_reflect_metadata("ArrayRepeatedUnionWithTuple")(
    typia.reflect.metadata<[ArrayRepeatedUnionWithTuple]>(),
  );
