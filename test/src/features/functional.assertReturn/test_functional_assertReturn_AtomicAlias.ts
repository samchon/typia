import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertReturn_AtomicAlias =
  _test_functional_assertReturn(TypeGuardError)("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.assertReturn(p),
  );
