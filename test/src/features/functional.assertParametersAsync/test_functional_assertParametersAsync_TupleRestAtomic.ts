import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertParametersAsync_TupleRestAtomic =
  _test_functional_assertParametersAsync(TypeGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.assertParameters(p),
  );
