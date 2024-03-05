import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { TupleOptional } from "../../structures/TupleOptional";

export const test_misc_createAssertPruneCustom_TupleOptional =
  _test_misc_assertPrune(CustomGuardError)("TupleOptional")<TupleOptional>(
    TupleOptional,
  )(
    typia.misc.createAssertPrune<TupleOptional>((p) => new CustomGuardError(p)),
  );
