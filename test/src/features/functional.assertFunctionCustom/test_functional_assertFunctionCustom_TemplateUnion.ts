import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertFunctionCustom_TemplateUnion =
  _test_functional_assertFunction(CustomGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => TemplateUnion) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
