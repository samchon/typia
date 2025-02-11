import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertParameters_ArraySimpleProtobufOptional =
  _test_functional_assertParameters(TypeGuardError)(
    "ArraySimpleProtobufOptional",
  )(ArraySimpleProtobufOptional)(
    (p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional) =>
      typia.functional.assertParameters(p),
  );
