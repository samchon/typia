import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertParameters_AtomicSimple = (): void =>
  _test_functional_assertParameters(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => AtomicSimple) =>
    typia.functional.assertParameters(p),
  );
