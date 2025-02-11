import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ArraySimpleProtobuf = _test_functional_assertParametersAsync(CustomGuardError)(
  "ArraySimpleProtobuf"
)(ArraySimpleProtobuf)(
  (p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)