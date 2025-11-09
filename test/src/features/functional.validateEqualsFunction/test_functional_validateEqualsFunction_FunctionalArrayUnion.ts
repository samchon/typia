import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_functional_validateEqualsFunction_FunctionalArrayUnion = (): void => _test_functional_validateEqualsFunction(
  "FunctionalArrayUnion"
)(FunctionalArrayUnion)(
  (p: (input: FunctionalArrayUnion) => FunctionalArrayUnion) => typia.functional.validateEqualsFunction(p),
)