import typia from "typia";

import { _test_functional_validateReturn } from "../../internal/_test_functional_validateReturn";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateReturn_AtomicSimple = (): void => _test_functional_validateReturn(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => AtomicSimple) => typia.functional.validateReturn(p),
)