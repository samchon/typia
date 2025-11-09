import typia from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertParameters_ArraySimpleProtobuf = (): void => _test_functional_assertParameters(TypeGuardError)(
  "ArraySimpleProtobuf"
)(ArraySimpleProtobuf)(
  (p: (input: ArraySimpleProtobuf) => ArraySimpleProtobuf) => typia.functional.assertParameters(p),
)