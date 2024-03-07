import typia from "typia";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_ArraySimple = _test_reflect_metadata(
  "ArraySimple",
)(typia.reflect.metadata<[ArraySimple]>());
