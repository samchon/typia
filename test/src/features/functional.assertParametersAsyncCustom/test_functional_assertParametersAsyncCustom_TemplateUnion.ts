import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_TemplateUnion =
  _test_functional_assertParametersAsync(CustomGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
