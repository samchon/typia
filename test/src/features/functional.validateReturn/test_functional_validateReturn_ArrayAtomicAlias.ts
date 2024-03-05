import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_validateReturn_ArrayAtomicAlias =
  _test_functional_validateReturn("ArrayAtomicAlias")(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
      typia.functional.validateReturn(p),
  );
