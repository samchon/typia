import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_assertEquals_TypeTagInfinite = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagInfinite")<TypeTagInfinite>(
    TypeTagInfinite,
  )((input) => typia.assertEquals<TypeTagInfinite>(input));
