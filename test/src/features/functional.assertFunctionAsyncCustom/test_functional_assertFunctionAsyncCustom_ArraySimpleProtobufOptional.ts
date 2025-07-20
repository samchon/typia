import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertFunctionAsyncCustom_ArraySimpleProtobufOptional =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ArraySimpleProtobufOptional",
    )(ArraySimpleProtobufOptional)(
      (
        p: (
          input: ArraySimpleProtobufOptional,
        ) => Promise<ArraySimpleProtobufOptional>,
      ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
