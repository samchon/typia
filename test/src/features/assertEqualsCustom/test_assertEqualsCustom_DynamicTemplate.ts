import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_assertEqualsCustom_DynamicTemplate = (): void =>
  _test_assertEquals(CustomGuardError)("DynamicTemplate")<DynamicTemplate>(
    DynamicTemplate,
  )((input) =>
    typia.assertEquals<DynamicTemplate>(input, (p) => new CustomGuardError(p)),
  );
