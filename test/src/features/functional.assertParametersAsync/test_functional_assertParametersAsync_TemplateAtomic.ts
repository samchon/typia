import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertParametersAsync_TemplateAtomic =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TemplateAtomic")(
      TemplateAtomic,
    )((p: (input: TemplateAtomic) => Promise<TemplateAtomic>) =>
      typia.functional.assertParameters(p),
    );
