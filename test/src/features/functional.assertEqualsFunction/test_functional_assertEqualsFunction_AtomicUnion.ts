import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsFunction_AtomicUnion =
  _test_functional_assertEqualsFunction(TypeGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => AtomicUnion) =>
    typia.functional.assertEqualsFunction(p),
  );
