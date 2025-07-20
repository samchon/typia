import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertParametersAsync_TemplateUnion =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)("TemplateUnion")(
      TemplateUnion,
    )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.assertParameters(p),
    );
