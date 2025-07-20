import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_validateEqualsFunction_ArrayAtomicAlias =
  (): void =>
    _test_functional_validateEqualsFunction("ArrayAtomicAlias")(
      ArrayAtomicAlias,
    )((p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
      typia.functional.validateEqualsFunction(p),
    );
