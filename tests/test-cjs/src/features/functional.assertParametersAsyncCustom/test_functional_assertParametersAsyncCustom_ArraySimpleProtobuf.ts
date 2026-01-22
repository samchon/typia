import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimpleProtobuf } from "../../structures/ArraySimpleProtobuf";

export const test_functional_assertParametersAsyncCustom_ArraySimpleProtobuf =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ArraySimpleProtobuf",
    )(ArraySimpleProtobuf)(
      (p: (input: ArraySimpleProtobuf) => Promise<ArraySimpleProtobuf>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
