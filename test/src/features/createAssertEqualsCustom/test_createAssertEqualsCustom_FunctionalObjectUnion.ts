import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_createAssertEqualsCustom_FunctionalObjectUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "FunctionalObjectUnion",
  )<FunctionalObjectUnion>(FunctionalObjectUnion)(
    typia.createAssertEquals<FunctionalObjectUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
