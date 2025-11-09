import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertParametersCustom_ArrayAtomicAlias =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("ArrayAtomicAlias")(
      ArrayAtomicAlias,
    )((p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
