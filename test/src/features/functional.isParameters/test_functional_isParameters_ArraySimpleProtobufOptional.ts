import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_isParameters_ArraySimpleProtobufOptional =
  (): void =>
    _test_functional_isParameters("ArraySimpleProtobufOptional")(
      ArraySimpleProtobufOptional,
    )(
      (
        p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional,
      ) => typia.functional.isParameters(p),
    );
