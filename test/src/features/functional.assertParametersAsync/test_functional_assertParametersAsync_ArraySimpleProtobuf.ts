import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArraySimpleProtobuf =
  _test_functional_assertParametersAsync(TypeGuardError)("ArraySimpleProtobuf")(
    ArraySimpleProtobuf,
  )((p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
    typia.functional.assertParameters(p),
  );
