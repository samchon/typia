import typia from "typia";
import { TypeTagTuple } from "../../structures/TypeTagTuple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TypeTagTuple = _test_reflect_metadata(
  "TypeTagTuple",
)(typia.reflect.metadata<[TypeTagTuple]>());
