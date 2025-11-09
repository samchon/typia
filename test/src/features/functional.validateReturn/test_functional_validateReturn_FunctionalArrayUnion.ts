import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_validateReturn_FunctionalArrayUnion = (): void => _test_functional_validateReturn(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.validateReturn(p),
)