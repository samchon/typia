import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ArraySimpleProtobuf = _test_functional_assertFunctionAsync(TypeGuardError)(
  "ArraySimpleProtobuf"
)(ArraySimpleProtobuf)(
  (p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
    typia.functional.assertFunction(p),
)