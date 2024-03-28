import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsParametersAsync_TupleRestAtomic =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "TupleRestAtomic",
  )(TupleRestAtomic)(
    (p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
      typia.functional.assertEqualsParameters(p),
  );
