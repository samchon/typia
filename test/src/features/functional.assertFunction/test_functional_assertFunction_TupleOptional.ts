import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertFunction_TupleOptional =
  _test_functional_assertFunction(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertFunction(p),
  );
