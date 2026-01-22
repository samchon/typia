import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_equalsParameters_ToJsonAtomicUnion = (): void =>
  _test_functional_equalsParameters("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
      typia.functional.equalsParameters(p),
  );
