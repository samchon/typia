import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArraySimpleProtobufOptional =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ArraySimpleProtobufOptional",
  )(ArraySimpleProtobufOptional)(
    (
      p: (
        input: ArraySimpleProtobufOptional,
      ) => Promise<ArraySimpleProtobufOptional>,
    ) => typia.functional.assertParameters(p),
  );
