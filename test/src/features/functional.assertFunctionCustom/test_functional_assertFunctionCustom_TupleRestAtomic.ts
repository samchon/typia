import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertFunctionCustom_TupleRestAtomic =
  _test_functional_assertFunction(CustomGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
