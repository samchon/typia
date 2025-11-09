import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ArraySimpleProtobufNullable = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "ArraySimpleProtobufNullable"
)(ArraySimpleProtobufNullable)(
  (p: (input: ArraySimpleProtobufNullable) => Promise<ArraySimpleProtobufNullable>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)