import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_validateParameters_ArrayAtomicSimple = (): void =>
  _test_functional_validateParameters("ArrayAtomicSimple")(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) =>
      typia.functional.validateParameters(p),
  );
