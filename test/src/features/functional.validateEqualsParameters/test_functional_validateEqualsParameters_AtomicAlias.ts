import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateEqualsParameters_AtomicAlias = (): void =>
  _test_functional_validateEqualsParameters("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.validateEqualsParameters(p),
  );
