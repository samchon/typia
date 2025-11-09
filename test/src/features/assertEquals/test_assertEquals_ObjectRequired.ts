import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectRequired } from "../../structures/ObjectRequired";

export const test_assertEquals_ObjectRequired = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectRequired")<ObjectRequired>(
    ObjectRequired,
  )((input) => typia.assertEquals<ObjectRequired>(input));
