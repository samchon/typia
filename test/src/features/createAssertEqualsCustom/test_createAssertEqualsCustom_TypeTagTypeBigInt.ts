import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeBigInt } from "../../structures/TypeTagTypeBigInt";

export const test_createAssertEqualsCustom_TypeTagTypeBigInt =
  _test_assertEquals(CustomGuardError)("TypeTagTypeBigInt")<TypeTagTypeBigInt>(
    TypeTagTypeBigInt,
  )(
    typia.createAssertEquals<TypeTagTypeBigInt>((p) => new CustomGuardError(p)),
  );
