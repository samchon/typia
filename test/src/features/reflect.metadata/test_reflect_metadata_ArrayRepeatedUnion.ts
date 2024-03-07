import typia from "typia";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArrayRepeatedUnion = _test_reflect_metadata(
  "ArrayRepeatedUnion",
)(typia.reflect.metadata<[ArrayRepeatedUnion]>());
