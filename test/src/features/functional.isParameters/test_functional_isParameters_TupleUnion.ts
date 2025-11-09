import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_isParameters_TupleUnion = (): void => _test_functional_isParameters(
  "TupleUnion"
)(TupleUnion)(
  (p: (input: TupleUnion) => TupleUnion) => typia.functional.isParameters(p),
)