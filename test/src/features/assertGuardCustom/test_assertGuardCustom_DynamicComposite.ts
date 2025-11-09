import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_assertGuardCustom_DynamicComposite = (): void =>
  _test_assertGuard(CustomGuardError)("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )((input) =>
    typia.assertGuard<DynamicComposite>(input, (p) => new CustomGuardError(p)),
  );
