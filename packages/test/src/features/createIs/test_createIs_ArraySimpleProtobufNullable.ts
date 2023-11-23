import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_createIs_ArraySimpleProtobufNullable = _test_is(
  "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)(
  typia.createIs<ArraySimpleProtobufNullable>(),
);
