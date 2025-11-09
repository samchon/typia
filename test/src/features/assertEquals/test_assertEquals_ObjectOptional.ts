import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_assertEquals_ObjectOptional = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )((input) => typia.assertEquals<ObjectOptional>(input));
