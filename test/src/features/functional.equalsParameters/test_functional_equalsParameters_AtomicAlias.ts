import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_equalsParameters_AtomicAlias =
  _test_functional_equalsParameters("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.equalsParameters(p),
  );
