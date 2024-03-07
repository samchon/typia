import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_validateFunctionAsync_TypeTagAtomicUnion =
  _test_functional_validateFunctionAsync("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
    typia.functional.validateFunction(p),
  );
