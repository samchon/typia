import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertGuardEquals_DynamicComposite = (): void =>
  _test_assertGuardEquals(TypeGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) => typia.assertGuardEquals<DynamicComposite>(input));
