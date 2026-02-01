import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_isParameters_AtomicUnion = (): void => _test_functional_isParameters(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => AtomicUnion) => typia.functional.isParameters(p),
)