import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createAssertEqualsCustom_FunctionalPropertyUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)(
    typia.createAssertEquals<FunctionalPropertyUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
