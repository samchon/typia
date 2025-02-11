import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_equalsParametersAsync_TypeTagAtomicUnion =
  _test_functional_equalsParametersAsync("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
    typia.functional.equalsParameters(p),
  );
