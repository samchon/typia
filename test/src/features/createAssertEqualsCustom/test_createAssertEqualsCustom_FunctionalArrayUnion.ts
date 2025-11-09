import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createAssertEqualsCustom_FunctionalArrayUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "FunctionalArrayUnion",
  )<FunctionalArrayUnion>(FunctionalArrayUnion)(
    typia.createAssertEquals<FunctionalArrayUnion>(
      (p) => new CustomGuardError(p),
    ),
  );
