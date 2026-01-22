import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagFormat } from "../../structures/TypeTagFormat";

export const test_createAssertEqualsCustom_TypeTagFormat = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagFormat")<TypeTagFormat>(
    TypeTagFormat,
  )(typia.createAssertEquals<TypeTagFormat>((p) => new CustomGuardError(p)));
