import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertReturnAsync_ArraySimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(TypeGuardError)("ArraySimpleProtobuf")(
      ArraySimpleProtobuf,
    )((p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
      typia.functional.assertReturn(p),
    );
