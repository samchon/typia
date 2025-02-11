import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_isReturn_TupleUnion = _test_functional_isReturn(
  "TupleUnion",
)(TupleUnion)((p: (input: TupleUnion) => TupleUnion) =>
  typia.functional.isReturn(p),
);
