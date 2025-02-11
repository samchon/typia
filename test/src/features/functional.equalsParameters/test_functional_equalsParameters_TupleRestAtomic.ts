import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_equalsParameters_TupleRestAtomic =
  _test_functional_equalsParameters("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.equalsParameters(p),
  );
