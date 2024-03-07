import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectHttpConstant =
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.assertGuardEquals<ObjectHttpConstant>(input),
  );
