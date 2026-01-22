import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_equalsFunction_ConstantAtomicSimple = (): void =>
  _test_functional_equalsFunction("ConstantAtomicSimple")(ConstantAtomicSimple)(
    (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) =>
      typia.functional.equalsFunction(p),
  );
