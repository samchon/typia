import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsFunction_AtomicAlias =
  _test_functional_assertEqualsFunction(TypeGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => AtomicAlias) =>
    typia.functional.assertEqualsFunction(p),
  );
