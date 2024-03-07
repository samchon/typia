import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TypeTagAtomicUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
