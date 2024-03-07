import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TypeTagTypeUnion =
  _test_assertEquals(CustomGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )(typia.createAssertEquals<TypeTagTypeUnion>((p) => new CustomGuardError(p)));
