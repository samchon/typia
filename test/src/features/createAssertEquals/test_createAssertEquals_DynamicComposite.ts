import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertEquals_DynamicComposite = (): void =>
  _test_assertEquals(TypeGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.createAssertEquals<DynamicComposite>());
