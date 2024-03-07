import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectHttpArray = _test_assertEquals(
  TypeGuardError,
)("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)((input) =>
  typia.assertEquals<ObjectHttpArray>(input),
);
