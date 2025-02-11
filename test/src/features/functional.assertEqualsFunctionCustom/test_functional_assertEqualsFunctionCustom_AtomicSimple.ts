import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_assertEqualsFunctionCustom_AtomicSimple =
  _test_functional_assertEqualsFunction(CustomGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => AtomicSimple) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
