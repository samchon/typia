import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_createAssertCustom_TypeTagTypeUnion = (): void =>
  _test_assert(CustomGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )(typia.createAssert<TypeTagTypeUnion>((p) => new CustomGuardError(p)));
