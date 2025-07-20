import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_misc_assertPruneCustom_ObjectOptional = (): void =>
  _test_misc_assertPrune(CustomGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) =>
    typia.misc.assertPrune<ObjectOptional>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
