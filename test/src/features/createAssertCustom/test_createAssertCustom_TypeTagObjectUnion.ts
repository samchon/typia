import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssertCustom_TypeTagObjectUnion = (): void =>
  _test_assert(CustomGuardError)("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.createAssert<TypeTagObjectUnion>((p) => new CustomGuardError(p)));
