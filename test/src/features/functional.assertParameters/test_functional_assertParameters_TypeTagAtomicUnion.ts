import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertParameters_TypeTagAtomicUnion =
  _test_functional_assertParameters(TypeGuardError)("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
    typia.functional.assertParameters(p),
  );
