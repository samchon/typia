import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_equalsParametersAsync_TupleUnion =
  _test_functional_equalsParametersAsync("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => Promise<TupleUnion>) =>
      typia.functional.equalsParameters(p),
  );
