import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_equalsReturn_ConstantAtomicUnion = (): void =>
  _test_functional_equalsReturn("ConstantAtomicUnion")(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      typia.functional.equalsReturn(p),
  );
