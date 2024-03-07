import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_TypeTagAtomicUnion =
  _test_functional_assertEqualsReturn(CustomGuardError)("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
