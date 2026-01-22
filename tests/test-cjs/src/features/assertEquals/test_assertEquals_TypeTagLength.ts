import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_assertEquals_TypeTagLength = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagLength")<TypeTagLength>(
    TypeTagLength,
  )((input) => typia.assertEquals<TypeTagLength>(input));
