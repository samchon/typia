import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_createAssertEqualsCustom_FunctionalValueUnion =
  _test_assertEquals(CustomGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)(
    typia.createAssertEquals<FunctionalValueUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
