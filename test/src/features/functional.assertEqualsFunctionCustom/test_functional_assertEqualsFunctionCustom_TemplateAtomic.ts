import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_functional_assertEqualsFunctionCustom_TemplateAtomic =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("TemplateAtomic")(
      TemplateAtomic,
    )((p: (input: TemplateAtomic) => TemplateAtomic) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
