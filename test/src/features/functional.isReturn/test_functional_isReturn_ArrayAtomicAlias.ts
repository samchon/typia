import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_isReturn_ArrayAtomicAlias =
  _test_functional_isReturn("ArrayAtomicAlias")(ArrayAtomicAlias)(
    (p: (input: ArrayAtomicAlias) => ArrayAtomicAlias) =>
      typia.functional.isReturn(p),
  );
