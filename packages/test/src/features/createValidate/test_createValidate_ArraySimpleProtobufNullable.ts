import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_createValidate_ArraySimpleProtobufNullable = _test_validate(
  "ArraySimpleProtobufNullable",
)<ArraySimpleProtobufNullable>(ArraySimpleProtobufNullable)(
  typia.createValidate<ArraySimpleProtobufNullable>(),
);
