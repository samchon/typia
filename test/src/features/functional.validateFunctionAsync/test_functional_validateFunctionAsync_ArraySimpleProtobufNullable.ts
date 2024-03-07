import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_validateFunctionAsync_ArraySimpleProtobufNullable =
  _test_functional_validateFunctionAsync("ArraySimpleProtobufNullable")(
    ArraySimpleProtobufNullable,
  )(
    (
      p: (
        input: ArraySimpleProtobufNullable,
      ) => Promise<ArraySimpleProtobufNullable>,
    ) => typia.functional.validateFunction(p),
  );
