import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertReturn_TupleRestAtomic = (): void =>
  _test_functional_assertReturn(TypeGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
    typia.functional.assertReturn(p),
  );
