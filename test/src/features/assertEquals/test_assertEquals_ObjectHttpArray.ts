import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_assertEquals_ObjectHttpArray = (): void =>
  _test_assertEquals(TypeGuardError)("ObjectHttpArray")<ObjectHttpArray>(
    ObjectHttpArray,
  )((input) => typia.assertEquals<ObjectHttpArray>(input));
