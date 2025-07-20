import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assertCustom_TypeTagTypeUnion = (): void =>
  _test_assert(CustomGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )((input) =>
    typia.assert<TypeTagTypeUnion>(input, (p) => new CustomGuardError(p)),
  );
