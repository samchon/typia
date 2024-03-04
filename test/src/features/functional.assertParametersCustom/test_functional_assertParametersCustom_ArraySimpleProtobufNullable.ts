import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_assertParametersCustom_ArraySimpleProtobufNullable =
  _test_functional_assertParameters(CustomGuardError)(
    "ArraySimpleProtobufNullable",
  )(ArraySimpleProtobufNullable)(
    (p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
