import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertFunctionCustom_TupleOptional = (): void =>
  _test_functional_assertFunction(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
