import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertParametersAsyncCustom_TypeTagAtomicUnion =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "TypeTagAtomicUnion",
  )(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
