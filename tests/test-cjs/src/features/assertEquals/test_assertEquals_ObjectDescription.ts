import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectDescription } from "../../structures/ObjectDescription";

export const test_assertEquals_ObjectDescription = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )((input) => typia.assertEquals<ObjectDescription>(input));
