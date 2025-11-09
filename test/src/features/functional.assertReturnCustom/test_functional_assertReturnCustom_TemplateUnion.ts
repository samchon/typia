import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_functional_assertReturnCustom_TemplateUnion = (): void =>
  _test_functional_assertReturn(CustomGuardError)("TemplateUnion")(
    TemplateUnion,
  )((p: (input: TemplateUnion) => TemplateUnion) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
