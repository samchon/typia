import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertFunctionAsync_TemplateAtomic =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("TemplateAtomic")(
      TemplateAtomic,
    )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.assertFunction(p),
    );
