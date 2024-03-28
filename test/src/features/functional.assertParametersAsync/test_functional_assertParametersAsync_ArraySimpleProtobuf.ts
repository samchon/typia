import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertParametersAsync_ArraySimpleProtobuf =
  _test_functional_assertParametersAsync(TypeGuardError)("ArraySimpleProtobuf")(
    ArraySimpleProtobuf,
  )((p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
    typia.functional.assertParameters(p),
  );
