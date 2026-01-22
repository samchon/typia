import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assertEqualsCustom_TypeTagCustom = (): void =>
  _test_assertEquals(CustomGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )((input) =>
    typia.assertEquals<TypeTagCustom>(input, (p) => new CustomGuardError(p)),
  );
