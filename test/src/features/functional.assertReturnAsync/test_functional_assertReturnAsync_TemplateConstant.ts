import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_functional_assertReturnAsync_TemplateConstant =
  _test_functional_assertReturnAsync(TypeGuardError)("TemplateConstant")(
    TemplateConstant,
  )((p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
    typia.functional.assertReturn(p),
  );
