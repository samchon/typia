import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_assertEquals_ObjectGeneric = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectGeneric")<ObjectGeneric>(
    ObjectGeneric,
  )((input) => typia.assertEquals<ObjectGeneric>(input));
