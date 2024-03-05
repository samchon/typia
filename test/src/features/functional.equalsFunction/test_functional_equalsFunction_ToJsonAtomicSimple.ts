import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_equalsFunction_ToJsonAtomicSimple =
  _test_functional_equalsFunction("ToJsonAtomicSimple")(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
      typia.functional.equalsFunction(p),
  );
