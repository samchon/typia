import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_ArraySimpleProtobufNullable = (): void => _test_functional_assertReturn(CustomGuardError)(
  "ArraySimpleProtobufNullable"
)(ArraySimpleProtobufNullable)(
  (p: (input: ArraySimpleProtobufNullable) => ArraySimpleProtobufNullable) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)