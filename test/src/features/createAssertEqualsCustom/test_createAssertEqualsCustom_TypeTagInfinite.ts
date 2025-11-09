import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_createAssertEqualsCustom_TypeTagInfinite = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )(typia.createAssertEquals<TypeTagInfinite>((p) => new CustomGuardError(p)));
