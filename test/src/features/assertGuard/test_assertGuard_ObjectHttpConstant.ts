import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertGuard_ObjectHttpConstant = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectHttpConstant")<ObjectHttpConstant>(
    ObjectHttpConstant,
  )((input) => typia.assertGuard<ObjectHttpConstant>(input));
