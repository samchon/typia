import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_validateParametersAsync_ArraySimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_validateParametersAsync("ArraySimpleProtobufNullable")(
      ArraySimpleProtobufNullable,
    )(
      (
        p: (
          input: ArraySimpleProtobufNullable,
        ) => Promise<ArraySimpleProtobufNullable>,
      ) => typia.functional.validateParameters(p),
    );
