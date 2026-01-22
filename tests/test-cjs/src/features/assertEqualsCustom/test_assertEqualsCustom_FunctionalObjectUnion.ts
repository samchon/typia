import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";

export const test_assertEqualsCustom_FunctionalObjectUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "FunctionalObjectUnion",
  )<FunctionalObjectUnion>(FunctionalObjectUnion)((input) =>
    typia.assertEquals<FunctionalObjectUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
