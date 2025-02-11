import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertEqualsParametersCustom_TupleOptional =
  _test_functional_assertEqualsParameters(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
