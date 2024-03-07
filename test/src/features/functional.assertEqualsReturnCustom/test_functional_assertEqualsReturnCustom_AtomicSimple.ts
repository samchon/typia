import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_AtomicSimple =
  _test_functional_assertEqualsReturn(CustomGuardError)("AtomicSimple")(
    AtomicSimple,
  )((p: (input: AtomicSimple) => AtomicSimple) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
