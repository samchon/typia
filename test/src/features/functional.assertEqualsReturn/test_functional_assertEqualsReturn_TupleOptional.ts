import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsReturn_TupleOptional =
  _test_functional_assertEqualsReturn(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertEqualsReturn(p),
  );
