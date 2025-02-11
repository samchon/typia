import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createAssertEqualsCustom_DynamicComposite =
  _test_assertEquals(CustomGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.createAssertEquals<DynamicComposite>((p) => new CustomGuardError(p)));
