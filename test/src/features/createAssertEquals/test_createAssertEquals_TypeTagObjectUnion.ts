import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_createAssertEquals_TypeTagObjectUnion = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagObjectUnion")<TypeTagObjectUnion>(
    TypeTagObjectUnion,
  )(typia.createAssertEquals<TypeTagObjectUnion>());
