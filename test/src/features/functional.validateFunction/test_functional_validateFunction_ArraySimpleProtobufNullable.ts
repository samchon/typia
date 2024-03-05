import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_validateFunction_ArraySimpleProtobufNullable =
  _test_functional_validateFunction("ArraySimpleProtobufNullable")(
    ArraySimpleProtobufNullable,
  )((p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) =>
    typia.functional.validateFunction(p),
  );
