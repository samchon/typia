import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertReturnAsync_ArraySimpleProtobuf = _test_functional_assertReturnAsync(TypeGuardError)(
  "ArraySimpleProtobuf"
)(ArraySimpleProtobuf)(
  (p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
    typia.functional.assertReturn(p),
)