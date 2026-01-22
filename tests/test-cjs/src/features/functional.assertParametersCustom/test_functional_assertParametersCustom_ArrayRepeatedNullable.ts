import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_functional_assertParametersCustom_ArrayRepeatedNullable =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)(
      "ArrayRepeatedNullable",
    )(ArrayRepeatedNullable)(
      (p: (input: ArrayRepeatedNullable) => ArrayRepeatedNullable) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
