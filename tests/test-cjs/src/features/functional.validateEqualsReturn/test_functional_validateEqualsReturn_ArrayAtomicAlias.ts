import typia from "typia";

import { _test_functional_validateEqualsReturn } from "../../internal/_test_functional_validateEqualsReturn";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_validateEqualsReturn_ArrayAtomicAlias = (): void =>
  _test_functional_validateEqualsReturn("ArrayAtomicAlias")(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
      typia.functional.validateEqualsReturn(p),
  );
