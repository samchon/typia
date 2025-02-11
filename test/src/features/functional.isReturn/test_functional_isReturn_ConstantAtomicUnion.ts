import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_isReturn_ConstantAtomicUnion =
  _test_functional_isReturn("ConstantAtomicUnion")(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      typia.functional.isReturn(p),
  );
