import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertParametersAsyncCustom_TupleRestAtomic =
  _test_functional_assertParametersAsync(CustomGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => Promise<TupleRestAtomic>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
