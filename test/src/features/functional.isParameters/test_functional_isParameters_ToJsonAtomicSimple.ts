import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_isParameters_ToJsonAtomicSimple =
  _test_functional_isParameters("ToJsonAtomicSimple")(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
      typia.functional.isParameters(p),
  );
