import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_is_ArraySimpleProtobuf = _test_is(
  "ArraySimpleProtobuf",
)<ArraySimpleProtobuf>(ArraySimpleProtobuf)((input) =>
  typia.is<ArraySimpleProtobuf>(input),
);
