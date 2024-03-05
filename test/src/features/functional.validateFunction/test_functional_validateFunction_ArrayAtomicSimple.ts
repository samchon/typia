import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_validateFunction_ArrayAtomicSimple =
  _test_functional_validateFunction("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
      typia.functional.validateFunction(p),
  );
