import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertFunction_TupleRestAtomic = (): void =>
  _test_functional_assertFunction(TypeGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
    typia.functional.assertFunction(p),
  );
