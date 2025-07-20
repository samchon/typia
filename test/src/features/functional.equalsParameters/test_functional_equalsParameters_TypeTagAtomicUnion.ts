import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_equalsParameters_TypeTagAtomicUnion = (): void =>
  _test_functional_equalsParameters("TypeTagAtomicUnion")(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
      typia.functional.equalsParameters(p),
  );
