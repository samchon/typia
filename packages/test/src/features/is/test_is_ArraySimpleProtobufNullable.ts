import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_is_ArraySimpleProtobufNullable = _test_is(
  "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)((input) =>
  typia.is<ArraySimpleProtobufNullable>(input),
);
