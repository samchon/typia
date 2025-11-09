import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_functional_assertParametersCustom_ArrayRecursive = (): void =>
  _test_functional_assertParameters(CustomGuardError)("ArrayRecursive")(
    ArrayRecursive,
  )((p: (input: ArrayRecursive) => ArrayRecursive) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
