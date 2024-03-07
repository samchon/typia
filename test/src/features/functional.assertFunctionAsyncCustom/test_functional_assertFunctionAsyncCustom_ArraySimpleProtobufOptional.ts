import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArraySimpleProtobufOptional =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ArraySimpleProtobufOptional",
  )(ArraySimpleProtobufOptional)(
    (
      p: (
        input: ArraySimpleProtobufOptional,
      ) => Promise<ArraySimpleProtobufOptional>,
    ) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
