import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_assertEquals_TypeTagTuple = (): void =>
  _test_assertEquals(TypeGuardError)("TypeTagTuple")<TypeTagTuple>(
    TypeTagTuple,
  )((input) => typia.assertEquals<TypeTagTuple>(input));
