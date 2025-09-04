import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_createAssertEquals_TypeTagDefault = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagDefault")<TypeTagDefault>(
    TypeTagDefault,
  )(typia.createAssertEquals<TypeTagDefault>());
