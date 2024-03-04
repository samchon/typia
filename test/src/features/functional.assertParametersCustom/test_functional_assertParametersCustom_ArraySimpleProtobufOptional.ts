import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertParametersCustom_ArraySimpleProtobufOptional =
  _test_functional_assertParameters(CustomGuardError)(
    "ArraySimpleProtobufOptional",
  )(ArraySimpleProtobufOptional)(
    (p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
