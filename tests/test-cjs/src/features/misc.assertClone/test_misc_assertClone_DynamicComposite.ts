import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_assertClone_DynamicComposite = (): void =>
  _test_misc_assertClone(TypeGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) => typia.misc.assertClone<DynamicComposite>(input));
