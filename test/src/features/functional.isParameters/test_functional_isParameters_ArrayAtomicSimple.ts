import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_isParameters_ArrayAtomicSimple = (): void => _test_functional_isParameters(
  "ArrayAtomicSimple"
)(ArrayAtomicSimple)(
  (p: (input: ArrayAtomicSimple) => ArrayAtomicSimple) => typia.functional.isParameters(p),
)