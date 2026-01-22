import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertReturnCustom_AtomicAlias = (): void =>
  _test_functional_assertReturn(CustomGuardError)("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
