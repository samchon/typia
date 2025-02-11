import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpUndefindable } from "../../structures/ObjectHttpUndefindable";

export const test_assertEquals_ObjectHttpUndefindable = _test_assertEquals(
  TypeGuardError,
)("ObjectHttpUndefindable")<ObjectHttpUndefindable>(ObjectHttpUndefindable)(
  (input) => typia.assertEquals<ObjectHttpUndefindable>(input),
);
