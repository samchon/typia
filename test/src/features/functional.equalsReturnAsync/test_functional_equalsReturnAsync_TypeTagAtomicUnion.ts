import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../internal/_test_functional_equalsReturnAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_equalsReturnAsync_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_equalsReturnAsync("TypeTagAtomicUnion")(
      TypeTagAtomicUnion,
    )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      typia.functional.equalsReturn(p),
    );
