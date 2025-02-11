import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertParametersCustom_TemplateUnion =
  _test_functional_assertParameters(CustomGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => TemplateUnion) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
