import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimpleProtobufNullable } from "../../structures/ArraySimpleProtobufNullable";

export const test_functional_assertFunctionAsyncCustom_ArraySimpleProtobufNullable =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ArraySimpleProtobufNullable",
    )(ArraySimpleProtobufNullable)(
      (
        p: (
          input: ArraySimpleProtobufNullable,
        ) => Promise<ArraySimpleProtobufNullable>,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
