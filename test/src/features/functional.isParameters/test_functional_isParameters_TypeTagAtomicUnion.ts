import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_isParameters_TypeTagAtomicUnion = (): void =>
  _test_functional_isParameters("TypeTagAtomicUnion")(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => TypeTagAtomicUnion) =>
      typia.functional.isParameters(p),
  );
