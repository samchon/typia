import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_TupleOptional =
  _test_functional_assertEqualsReturn(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertEqualsReturn(p),
  );
