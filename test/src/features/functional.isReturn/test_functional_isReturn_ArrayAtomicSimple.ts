import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_isReturn_ArrayAtomicSimple = (): void =>
  _test_functional_isReturn("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
      typia.functional.isReturn(p),
  );
