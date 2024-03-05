import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_validateFunction_AtomicAlias =
  _test_functional_validateFunction("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.validateFunction(p),
  );
