import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_isReturn_ArraySimpleProtobufOptional =
  _test_functional_isReturn("ArraySimpleProtobufOptional")(
    ArraySimpleProtobufOptional,
  )((p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional) =>
    typia.functional.isReturn(p),
  );
