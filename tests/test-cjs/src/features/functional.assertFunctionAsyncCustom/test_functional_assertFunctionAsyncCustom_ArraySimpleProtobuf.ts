import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertFunctionAsyncCustom_ArraySimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ArraySimpleProtobuf",
    )(ArraySimpleProtobuf)(
      (p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
