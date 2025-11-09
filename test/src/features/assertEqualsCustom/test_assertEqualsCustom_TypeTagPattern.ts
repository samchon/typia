import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_assertEqualsCustom_TypeTagPattern = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagPattern")<TypeTagPattern>(
    TypeTagPattern,
  )((input) =>
    typia.assertEquals<TypeTagPattern>(input, (p) => new CustomGuardError(p)),
  );
