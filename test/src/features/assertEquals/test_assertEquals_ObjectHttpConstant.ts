import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertEquals_ObjectHttpConstant = _test_assertEquals(
  TypeGuardError,
)("ObjectHttpConstant")<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.assertEquals<ObjectHttpConstant>(input),
);
