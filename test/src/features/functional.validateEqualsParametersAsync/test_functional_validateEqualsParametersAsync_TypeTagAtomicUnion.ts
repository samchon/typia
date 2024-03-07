import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_validateEqualsParametersAsync_TypeTagAtomicUnion =
  _test_functional_validateEqualsParametersAsync("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
    typia.functional.validateEqualsParameters(p),
  );
