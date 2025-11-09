import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_assertEqualsCustom_TypeTagDefault = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )((input) =>
    typia.assertEquals<TypeTagDefault>(input, (p) => new CustomGuardError(p)),
  );
