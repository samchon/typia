import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_isReturn_ArraySimpleProtobufNullable = (): void => _test_functional_isReturn(
  "ArraySimpleProtobufNullable"
)(ArraySimpleProtobufNullable)(
  (p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) => typia.functional.isReturn(p),
)