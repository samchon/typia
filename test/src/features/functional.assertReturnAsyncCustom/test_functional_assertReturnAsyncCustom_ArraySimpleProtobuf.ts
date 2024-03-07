import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ArraySimpleProtobuf =
  _test_functional_assertReturnAsync(CustomGuardError)("ArraySimpleProtobuf")(
    ArraySimpleProtobuf,
  )((p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
