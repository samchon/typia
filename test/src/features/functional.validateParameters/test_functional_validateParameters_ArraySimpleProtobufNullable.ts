import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_validateParameters_ArraySimpleProtobufNullable =
  (): void =>
    _test_functional_validateParameters("ArraySimpleProtobufNullable")(
      ArraySimpleProtobufNullable,
    )(
      (
        p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable,
      ) => typia.functional.validateParameters(p),
    );
