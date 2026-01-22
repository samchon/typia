import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_functional_validateEqualsReturnAsync_TypeTagAtomicUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsReturnAsync("TypeTagAtomicUnion")(
      TypeTagAtomicUnion,
    )((p: (input: TypeTagAtomicUnion) => Promise<TypeTagAtomicUnion>) =>
      typia.functional.validateEqualsReturn(p),
    );
