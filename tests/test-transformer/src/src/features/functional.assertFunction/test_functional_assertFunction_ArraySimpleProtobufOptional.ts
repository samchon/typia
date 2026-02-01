import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ArraySimpleProtobufOptional = (): void => _test_functional_assertFunction(TypeGuardError)(
  "ArraySimpleProtobufOptional"
)(ArraySimpleProtobufOptional)(
  (p: (input: ArraySimpleProtobufOptional) => ArraySimpleProtobufOptional) => typia.functional.assertFunction(p),
)