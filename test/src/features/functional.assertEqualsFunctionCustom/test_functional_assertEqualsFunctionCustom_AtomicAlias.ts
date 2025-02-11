import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsFunctionCustom_AtomicAlias =
  _test_functional_assertEqualsFunction(CustomGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => AtomicAlias) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
