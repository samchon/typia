import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsParametersCustom_TemplateAtomic =
  _test_functional_assertEqualsParameters(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
