import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_TemplateAtomic =
  _test_functional_assertEqualsFunction(CustomGuardError)("TemplateAtomic")(
    TemplateAtomic,
  )((p: (input: TemplateAtomic) => TemplateAtomic) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
