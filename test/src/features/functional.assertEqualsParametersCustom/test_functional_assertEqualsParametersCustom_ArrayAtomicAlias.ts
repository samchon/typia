import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ArrayAtomicAlias =
  _test_functional_assertEqualsParameters(CustomGuardError)("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
