import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertFunction_ArraySimpleProtobufOptional =
  _test_functional_assertFunction(TypeGuardError)(
    "ArraySimpleProtobufOptional",
  )(ArraySimpleProtobufOptional)(
    (p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional) =>
      typia.functional.assertFunction(p),
  );
