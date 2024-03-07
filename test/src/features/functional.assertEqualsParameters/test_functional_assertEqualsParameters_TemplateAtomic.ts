import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_TemplateAtomic =
  _test_functional_assertEqualsParameters(TypeGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertEqualsParameters(p),
  );
