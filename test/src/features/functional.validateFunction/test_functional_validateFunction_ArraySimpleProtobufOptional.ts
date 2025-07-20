import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_validateFunction_ArraySimpleProtobufOptional =
  (): void =>
    _test_functional_validateFunction("ArraySimpleProtobufOptional")(
      ArraySimpleProtobufOptional,
    )(
      (
        p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional,
      ) => typia.functional.validateFunction(p),
    );
