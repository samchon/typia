import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_functional_assertReturnAsyncCustom_DynamicComposite =
  _test_functional_assertReturnAsync(CustomGuardError)("DynamicComposite")(
    DynamicComposite,
  )((p: (input: DynamicComposite) => Promise<DynamicComposite>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
