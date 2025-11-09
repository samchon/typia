import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertEqualsParameters_AtomicUnion = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("AtomicUnion")(
    AtomicUnion,
  )((p: (input: AtomicUnion) => AtomicUnion) =>
    typia.functional.assertEqualsParameters(p),
  );
