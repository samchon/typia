import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertFunctionAsync_ArraySimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ArraySimpleProtobuf")(
      ArraySimpleProtobuf,
    )((p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
      typia.functional.assertFunction(p),
    );
