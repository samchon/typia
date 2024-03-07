import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_TemplateUnion =
  _test_functional_assertParametersAsync(TypeGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertParameters(p),
  );
