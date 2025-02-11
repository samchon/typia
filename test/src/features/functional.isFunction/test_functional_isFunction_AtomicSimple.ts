import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_isFunction_AtomicSimple = _test_functional_isFunction(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => AtomicSimple) => typia.functional.isFunction(p),
)