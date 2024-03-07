import typia from "typia";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayRepeatedUnionWithTuple =
  _test_reflect_metadata("ArrayRepeatedUnionWithTuple")(
    typia.reflect.metadata<[ArrayRepeatedUnionWithTuple]>(),
  );
