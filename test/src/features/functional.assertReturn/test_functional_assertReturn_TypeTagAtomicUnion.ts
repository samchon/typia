import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertReturn_TypeTagAtomicUnion =
  _test_functional_assertReturn(TypeGuardError)("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
    typia.functional.assertReturn(p),
  );
