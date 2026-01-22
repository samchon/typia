import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_assertEqualsCustom_FunctionalProperty = (): void =>
  _test_assertEquals(CustomGuardError)(
    "FunctionalProperty",
  )<FunctionalProperty>(FunctionalProperty)((input) =>
    typia.assertEquals<FunctionalProperty>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
