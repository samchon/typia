import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArraySimpleProtobuf = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ArraySimpleProtobuf"
)(ArraySimpleProtobuf)(
  (p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)