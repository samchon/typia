import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertEqualsFunctionCustom_TemplateUnion =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("TemplateUnion")(
      TemplateUnion,
    )((p: (input: TemplateUnion) => TemplateUnion) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
