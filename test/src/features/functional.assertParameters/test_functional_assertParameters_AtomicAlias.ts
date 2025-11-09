import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertParameters_AtomicAlias = (): void =>
  _test_functional_assertParameters(TypeGuardError)("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.assertParameters(p),
  );
