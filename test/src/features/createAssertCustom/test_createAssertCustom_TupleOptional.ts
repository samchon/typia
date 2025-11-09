import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_createAssertCustom_TupleOptional = (): void =>
  _test_assert(CustomGuardError)("TupleOptional")<TupleOptional>(TupleOptional)(
    typia.createAssert<TupleOptional>((p) => new CustomGuardError(p)),
  );
