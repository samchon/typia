import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assertGuardCustom_TypeTagTypeUnion = (): void =>
  _test_assertGuard(CustomGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )((input) =>
    typia.assertGuard<TypeTagTypeUnion>(input, (p) => new CustomGuardError(p)),
  );
