import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_equalsFunction_AtomicAlias =
  _test_functional_equalsFunction("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.equalsFunction(p),
  );
