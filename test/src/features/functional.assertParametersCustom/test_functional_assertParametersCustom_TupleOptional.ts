import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertParametersCustom_TupleOptional =
  _test_functional_assertParameters(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
