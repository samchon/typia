import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_TemplateConstant =
  _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
    "TemplateConstant",
  )(TemplateConstant)(
    (p: (input: TemplateConstant) => Promise<TemplateConstant>) =>
      typia.functional.assertEqualsFunction(p),
  );
