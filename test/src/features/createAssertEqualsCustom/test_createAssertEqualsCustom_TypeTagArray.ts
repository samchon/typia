import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_createAssertEqualsCustom_TypeTagArray = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagArray")<TypeTagArray>(
    TypeTagArray,
  )(typia.createAssertEquals<TypeTagArray>((p) => new CustomGuardError(p)));
