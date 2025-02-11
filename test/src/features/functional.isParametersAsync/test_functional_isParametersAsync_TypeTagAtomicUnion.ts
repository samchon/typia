import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_isParametersAsync_TypeTagAtomicUnion =
  _test_functional_isParametersAsync("TypeTagAtomicUnion")(TypeTagAtomicUnion)(
    (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      typia.functional.isParameters(p),
  );
