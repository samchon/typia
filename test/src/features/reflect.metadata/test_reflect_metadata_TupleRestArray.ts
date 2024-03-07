import typia from "typia";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";

export const test_reflect_metadata_TupleRestArray = _test_reflect_metadata(
  "TupleRestArray",
)(typia.reflect.metadata<[TupleRestArray]>());
