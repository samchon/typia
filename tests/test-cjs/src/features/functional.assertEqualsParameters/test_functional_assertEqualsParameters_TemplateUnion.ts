import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertEqualsParameters_TemplateUnion = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => TemplateUnion) =>
    typia.functional.assertEqualsParameters(p),
  );
