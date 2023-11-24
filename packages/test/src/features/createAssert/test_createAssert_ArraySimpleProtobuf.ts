import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_createAssert_ArraySimpleProtobuf = _test_assert(
  "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)(
  typia.createAssert<ArraySimpleProtobuf>(),
);
