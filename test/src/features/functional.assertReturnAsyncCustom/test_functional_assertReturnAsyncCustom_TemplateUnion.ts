import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertReturnAsyncCustom_TemplateUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
