import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_isParameters_ToJsonAtomicUnion = (): void =>
  _test_functional_isParameters("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => ToJsonAtomicUnion) =>
      typia.functional.isParameters(p),
  );
