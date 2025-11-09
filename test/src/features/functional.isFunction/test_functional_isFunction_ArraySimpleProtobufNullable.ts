import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_isFunction_ArraySimpleProtobufNullable =
  (): void =>
    _test_functional_isFunction("ArraySimpleProtobufNullable")(
      ArraySimpleProtobufNullable,
    )(
      (
        p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable,
      ) => typia.functional.isFunction(p),
    );
