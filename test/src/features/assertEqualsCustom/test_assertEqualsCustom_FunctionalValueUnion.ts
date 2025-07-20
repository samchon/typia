import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";

export const test_assertEqualsCustom_FunctionalValueUnion = (): void =>
  _test_assertEquals(CustomGuardError)(
    "FunctionalValueUnion",
  )<FunctionalValueUnion>(FunctionalValueUnion)((input) =>
    typia.assertEquals<FunctionalValueUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
