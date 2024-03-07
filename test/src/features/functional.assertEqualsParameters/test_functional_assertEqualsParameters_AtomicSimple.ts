import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_AtomicSimple =
  _test_functional_assertEqualsParameters(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => AtomicSimple) =>
    typia.functional.assertEqualsParameters(p),
  );
