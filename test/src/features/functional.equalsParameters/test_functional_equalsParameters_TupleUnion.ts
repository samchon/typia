import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_equalsParameters_TupleUnion =
  _test_functional_equalsParameters("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.equalsParameters(p),
  );
