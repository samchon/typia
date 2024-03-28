import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsReturn_AtomicAlias =
  _test_functional_assertEqualsReturn(TypeGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => AtomicAlias) =>
    typia.functional.assertEqualsReturn(p),
  );
