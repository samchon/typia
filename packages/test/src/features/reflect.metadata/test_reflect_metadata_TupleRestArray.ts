import typia from "typia";

import { _test_reflect_metadata } from "../../internal/_test_reflect_metadata";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_reflect_metadata_TupleRestArray = _test_reflect_metadata(
  "TupleRestArray",
)(typia.reflect.metadata<[TupleRestArray]>());
