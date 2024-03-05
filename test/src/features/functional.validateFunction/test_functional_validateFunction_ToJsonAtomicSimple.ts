import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_validateFunction_ToJsonAtomicSimple =
  _test_functional_validateFunction("ToJsonAtomicSimple")(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
      typia.functional.validateFunction(p),
  );
