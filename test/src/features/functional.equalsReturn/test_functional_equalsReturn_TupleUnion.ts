import typia from "typia";

import { _test_functional_equalsReturn } from "../../internal/_test_functional_equalsReturn";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_equalsReturn_TupleUnion = (): void =>
  _test_functional_equalsReturn("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) => typia.functional.equalsReturn(p),
  );
