import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_assertReturnAsync_TypeTagAtomicUnion =
  _test_functional_assertReturnAsync(TypeGuardError)("TypeTagAtomicUnion")(
    TypeTagAtomicUnion,
  )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
    typia.functional.assertReturn(p),
  );
