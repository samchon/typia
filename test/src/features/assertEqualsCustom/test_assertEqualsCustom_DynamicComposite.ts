import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertEqualsCustom_DynamicComposite = (): void =>
  _test_assertEquals(CustomGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) =>
    typia.assertEquals<DynamicComposite>(input, (p) => new CustomGuardError(p)),
  );
