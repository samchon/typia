import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_isFunction_ToJsonAtomicSimple = (): void =>
  _test_functional_isFunction("ToJsonAtomicSimple")(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => ToJsonAtomicSimple) =>
      typia.functional.isFunction(p),
  );
