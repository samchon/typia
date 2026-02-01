import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_isFunction_FunctionalArrayUnion = (): void => _test_functional_isFunction(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.isFunction(p),
)