import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertParametersAsync_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "TypeTagAtomicUnion",
    )(TypeTagAtomicUnion)(
      (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
        typia.functional.assertParameters(p),
    );
