import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_validateReturn_ArraySimpleProtobufNullable =
  _test_functional_validateReturn("ArraySimpleProtobufNullable")(
    ArraySimpleProtobufNullable,
  )((p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) =>
    typia.functional.validateReturn(p),
  );
