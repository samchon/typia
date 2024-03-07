import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TupleOptional } from "../../structures/TupleOptional";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunction_TupleOptional =
  _test_functional_assertEqualsFunction(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertEqualsFunction(p),
  );
