import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertEqualsFunctionCustom_TupleRestAtomic =
  _test_functional_assertEqualsFunction(CustomGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
