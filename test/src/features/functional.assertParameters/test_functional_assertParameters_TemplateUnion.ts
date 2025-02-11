import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertParameters_TemplateUnion =
  _test_functional_assertParameters(TypeGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => TemplateUnion) =>
    typia.functional.assertParameters(p),
  );
