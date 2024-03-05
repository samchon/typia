import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { TupleUnion } from "../../structures/TupleUnion";

export const test_functional_validateEqualsParameters_TupleUnion =
  _test_functional_validateEqualsParameters("TupleUnion")(TupleUnion)(
    (p: (input: TupleUnion) => TupleUnion) =>
      typia.functional.validateEqualsParameters(p),
  );
