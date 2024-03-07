import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_AtomicAlias =
  _test_functional_assertFunction(CustomGuardError)("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
