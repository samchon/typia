import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_validateParameters_TypeTagAtomicUnion =
  _test_functional_validateParameters("TypeTagAtomicUnion")(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
      typia.functional.validateParameters(p),
  );
