import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertParametersCustom_TemplateAtomic =
  _test_functional_assertParameters(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
