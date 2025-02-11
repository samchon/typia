import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertFunction_AtomicAlias =
  _test_functional_assertFunction(TypeGuardError)("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.assertFunction(p),
  );
