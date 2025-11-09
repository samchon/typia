import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_assertParametersAsyncCustom_ArraySimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ArraySimpleProtobufNullable",
    )(ArraySimpleProtobufNullable)(
      (
        p: (
          input: ArraySimpleProtobufNullable,
        ) => Promise<ArraySimpleProtobufNullable>,
      ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
