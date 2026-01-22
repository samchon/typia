import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertGuard_DynamicComposite = (): void =>
  _test_assertGuard(TypeGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) => typia.assertGuard<DynamicComposite>(input));
