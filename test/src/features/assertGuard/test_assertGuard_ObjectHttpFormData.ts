import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ObjectHttpFormData } from "../../structures/ObjectHttpFormData";

export const test_assertGuard_ObjectHttpFormData = (): void =>
  _test_assertGuard(TypeGuardError)("ObjectHttpFormData")<ObjectHttpFormData>(
    ObjectHttpFormData,
  )((input) => typia.assertGuard<ObjectHttpFormData>(input));
