import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_isParameters_AtomicSimple =
  _test_functional_isParameters("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      typia.functional.isParameters(p),
  );
