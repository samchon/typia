import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagBigInt } from "../../structures/TypeTagBigInt";

export const test_createAssertEqualsCustom_TypeTagBigInt = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagBigInt")<TypeTagBigInt>(
    TypeTagBigInt,
  )(typia.createAssertEquals<TypeTagBigInt>((p) => new CustomGuardError(p)));
