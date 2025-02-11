import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_isParameters_TupleRestAtomic =
  _test_functional_isParameters("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => TupleRestAtomic) =>
      typia.functional.isParameters(p),
  );
