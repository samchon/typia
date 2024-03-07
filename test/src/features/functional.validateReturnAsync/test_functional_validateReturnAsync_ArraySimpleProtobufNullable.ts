import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_validateReturnAsync_ArraySimpleProtobufNullable =
  _test_functional_validateReturnAsync("ArraySimpleProtobufNullable")(
    ArraySimpleProtobufNullable,
  )(
    (
      p: (
        input: ArraySimpleProtobufNullable,
      ) => Promise<ArraySimpleProtobufNullable>,
    ) => typia.functional.validateReturn(p),
  );
