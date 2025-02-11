import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertEqualsFunction_AtomicSimple =
  _test_functional_assertEqualsFunction(TypeGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => AtomicSimple) =>
    typia.functional.assertEqualsFunction(p),
  );
