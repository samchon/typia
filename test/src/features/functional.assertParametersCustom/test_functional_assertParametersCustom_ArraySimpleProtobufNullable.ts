import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersCustom_ArraySimpleProtobufNullable = (): void => _test_functional_assertParameters(CustomGuardError)(
  "ArraySimpleProtobufNullable"
)(ArraySimpleProtobufNullable)(
  (p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)