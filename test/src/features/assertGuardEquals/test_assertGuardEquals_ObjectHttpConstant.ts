import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_assertGuardEquals_ObjectHttpConstant = (): void =>
  _test_assertGuardEquals(TypeGuardError)(
    "ObjectHttpConstant",
  )<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
    typia.assertGuardEquals<ObjectHttpConstant>(input),
  );
