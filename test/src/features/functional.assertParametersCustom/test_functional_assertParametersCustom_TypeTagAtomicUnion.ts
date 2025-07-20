import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertParametersCustom_TypeTagAtomicUnion =
  (): void =>
    _test_functional_assertParameters(CustomGuardError)("TypeTagAtomicUnion")(
      TypeTagAtomicUnion,
    )((p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
