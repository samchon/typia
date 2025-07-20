import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_functional_assertReturnCustom_TupleOptional = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TupleOptional")(
    TupleOptional,
  )((p: (input: TupleOptional) => TupleOptional) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
