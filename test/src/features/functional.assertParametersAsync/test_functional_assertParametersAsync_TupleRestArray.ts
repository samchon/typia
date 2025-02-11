import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_functional_assertParametersAsync_TupleRestArray =
  _test_functional_assertParametersAsync(TypeGuardError)("TupleRestArray")(
    TupleRestArray,
  )((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.assertParameters(p),
  );
