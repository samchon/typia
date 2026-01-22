import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertEqualsFunctionAsync_TemplateUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)("TemplateUnion")(
      TemplateUnion,
    )((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.assertEqualsFunction(p),
    );
