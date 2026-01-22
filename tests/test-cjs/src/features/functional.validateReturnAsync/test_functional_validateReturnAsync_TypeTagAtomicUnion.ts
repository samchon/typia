import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_validateReturnAsync_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("TypeTagAtomicUnion")(
      TypeTagAtomicUnion,
    )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      typia.functional.validateReturn(p),
    );
