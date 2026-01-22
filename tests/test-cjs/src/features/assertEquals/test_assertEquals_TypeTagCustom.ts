import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_assertEquals_TypeTagCustom = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagCustom")<TypeTagCustom>(
    TypeTagCustom,
  )((input) => typia.assertEquals<TypeTagCustom>(input));
