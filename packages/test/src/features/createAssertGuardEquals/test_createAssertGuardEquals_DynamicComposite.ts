import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertGuardEquals_DynamicComposite =
  _test_assertGuardEquals("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.createAssertGuardEquals<DynamicComposite>());
