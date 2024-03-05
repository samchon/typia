import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateParameters_TupleUnion =
  _test_functional_validateParameters("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.validateParameters(p),
  );
