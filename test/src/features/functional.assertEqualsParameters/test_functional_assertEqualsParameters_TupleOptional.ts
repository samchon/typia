import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsParameters_TupleOptional =
  _test_functional_assertEqualsParameters(TypeGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertEqualsParameters(p),
  );
