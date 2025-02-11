import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_functional_assertParameters_TupleRestAtomic =
  _test_functional_assertParameters(TypeGuardError)("TupleRestAtomic")(
    TupleRestAtomic,
  )((p: (input: TupleRestAtomic) => TupleRestAtomic) =>
    typia.functional.assertParameters(p),
  );
