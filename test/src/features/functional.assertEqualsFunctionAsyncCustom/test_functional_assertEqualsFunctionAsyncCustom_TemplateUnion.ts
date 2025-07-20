import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_TemplateUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
      "TemplateUnion",
    )(TemplateUnion)((p: (input: TemplateUnion) => Promise<TemplateUnion>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
