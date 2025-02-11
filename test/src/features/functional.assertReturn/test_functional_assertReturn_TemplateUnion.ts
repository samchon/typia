import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertReturn_TemplateUnion =
  _test_functional_assertReturn(TypeGuardError)("TemplateUnion")(TemplateUnion)(
    (p: (input: TemplateUnion) => TemplateUnion) =>
      typia.functional.assertReturn(p),
  );
