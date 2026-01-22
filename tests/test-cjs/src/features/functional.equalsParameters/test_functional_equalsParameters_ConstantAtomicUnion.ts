import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_equalsParameters_ConstantAtomicUnion = (): void =>
  _test_functional_equalsParameters("ConstantAtomicUnion")(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) =>
      typia.functional.equalsParameters(p),
  );
