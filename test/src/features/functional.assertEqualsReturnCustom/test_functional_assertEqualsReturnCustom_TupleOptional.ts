import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsReturnCustom_TupleOptional =
  _test_functional_assertEqualsReturn(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
