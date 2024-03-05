import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_equalsFunction_TupleRestAtomic =
  _test_functional_equalsFunction("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.equalsFunction(p),
  );
