import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagRangeBigInt } from "../../structures/TypeTagRangeBigInt";

export const test_createAssertEqualsCustom_TypeTagRangeBigInt =
  _test_assertEquals(CustomGuardError)(
    "TypeTagRangeBigInt",
  )<TypeTagRangeBigInt>(TypeTagRangeBigInt)(
    typia.createAssertEquals<TypeTagRangeBigInt>(
      (p) => new CustomGuardError(p),
    ),
  );
