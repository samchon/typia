import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_isFunctionAsync_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_isFunctionAsync("TypeTagAtomicUnion")(TypeTagAtomicUnion)(
      (p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
        typia.functional.isFunction(p),
    );
