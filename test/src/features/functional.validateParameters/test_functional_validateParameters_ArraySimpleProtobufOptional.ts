import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_validateParameters_ArraySimpleProtobufOptional =
  _test_functional_validateParameters("ArraySimpleProtobufOptional")(
    ArraySimpleProtobufOptional,
  )((p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional) =>
    typia.functional.validateParameters(p),
  );
