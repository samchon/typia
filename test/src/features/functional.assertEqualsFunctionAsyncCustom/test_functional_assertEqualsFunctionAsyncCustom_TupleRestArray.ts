import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TupleRestArray } from "../../structures/TupleRestArray";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_TupleRestArray =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "TupleRestArray",
  )(TupleRestArray)((p: (input: TupleRestArray) => Promise<TupleRestArray>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
