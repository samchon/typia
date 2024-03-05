import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_functional_isParameters_AtomicAlias =
  _test_functional_isParameters("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      typia.functional.isParameters(p),
  );
