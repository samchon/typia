import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_assertCustom_TupleOptional = (): void =>
  _test_assert(CustomGuardError)("TupleOptional")<TupleOptional>(TupleOptional)(
    (input) =>
      typia.assert<TupleOptional>(input, (p) => new CustomGuardError(p)),
  );
