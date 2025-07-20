import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimpleProtobufOptional } from "../../structures/ArraySimpleProtobufOptional";

export const test_functional_assertParametersAsyncCustom_ArraySimpleProtobufOptional =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ArraySimpleProtobufOptional",
    )(ArraySimpleProtobufOptional)(
      (
        p: (
          input: ArraySimpleProtobufOptional,
        ) => Promise<ArraySimpleProtobufOptional>,
      ) => typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
