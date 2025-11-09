import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_createAssertEqualsCustom_DynamicTemplate = (): void =>
  _test_assertEquals(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )(typia.createAssertEquals<DynamicTemplate>((p) => new CustomGuardError(p)));
