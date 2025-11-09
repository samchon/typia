import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateEqualsFunction_AtomicSimple = (): void => _test_functional_validateEqualsFunction(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => AtomicSimple) => typia.functional.validateEqualsFunction(p),
)