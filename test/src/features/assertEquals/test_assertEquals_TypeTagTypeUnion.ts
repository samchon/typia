import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_assertEquals_TypeTagTypeUnion = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )((input) => typia.assertEquals<TypeTagTypeUnion>(input));
