import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_validateFunctionAsync_TupleRestAtomic =
  _test_functional_validateFunctionAsync("TupleRestAtomic")(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      typia.functional.validateFunction(p),
  );
