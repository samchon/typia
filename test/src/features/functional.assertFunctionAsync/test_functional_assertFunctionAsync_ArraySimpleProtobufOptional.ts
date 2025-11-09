import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ArraySimpleProtobufOptional = (): Promise<void> => _test_functional_assertFunctionAsync(TypeGuardError)(
  "ArraySimpleProtobufOptional"
)(ArraySimpleProtobufOptional)(
  (p: (input: ArraySimpleProtobufOptional) => Promise<ArraySimpleProtobufOptional>) =>
    typia.functional.assertFunction(p),
)