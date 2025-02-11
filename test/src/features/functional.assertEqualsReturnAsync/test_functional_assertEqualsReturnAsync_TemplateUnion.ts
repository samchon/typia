import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertEqualsReturnAsync_TemplateUnion =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
    typia.functional.assertEqualsReturn(p),
  );
