import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_assertParameters_AtomicUnion =
  _test_functional_assertParameters(TypeGuardError)("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => AtomicUnion) =>
      typia.functional.assertParameters(p),
  );
