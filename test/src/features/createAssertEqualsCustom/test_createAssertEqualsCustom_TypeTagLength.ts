import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_createAssertEqualsCustom_TypeTagLength = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )(typia.createAssertEquals<TypeTagLength>((p) => new CustomGuardError(p)));
