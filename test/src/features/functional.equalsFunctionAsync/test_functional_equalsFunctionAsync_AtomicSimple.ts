import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_equalsFunctionAsync_AtomicSimple = _test_functional_equalsFunctionAsync(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.equalsFunction(p),
)