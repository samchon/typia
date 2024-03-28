import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_assertEqualsCustom_FunctionalPropertyUnion =
  _test_assertEquals(CustomGuardError)(
    "FunctionalPropertyUnion",
  )<FunctionalPropertyUnion>(FunctionalPropertyUnion)((input) =>
    typia.assertEquals<FunctionalPropertyUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
