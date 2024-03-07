import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../internal/_test_functional_validateParametersAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_validateParametersAsync_ArrayAtomicSimple =
  _test_functional_validateParametersAsync("ArrayAtomicSimple")(
    ArrayAtomicSimple,
  )((p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
    typia.functional.validateParameters(p),
  );
