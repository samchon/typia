import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArraySimpleProtobufOptional = _test_functional_assertParametersAsync(CustomGuardError)(
  "ArraySimpleProtobufOptional"
)(ArraySimpleProtobufOptional)(
  (p: (input: ArraySimpleProtobufOptional) => Promise<ArraySimpleProtobufOptional>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)