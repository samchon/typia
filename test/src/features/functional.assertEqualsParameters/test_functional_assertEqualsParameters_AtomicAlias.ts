import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_assertEqualsParameters_AtomicAlias =
  _test_functional_assertEqualsParameters(TypeGuardError)("AtomicAlias")(
    AtomicAlias,
  )((p: (input: AtomicAlias) => AtomicAlias) =>
    typia.functional.assertEqualsParameters(p),
  );
