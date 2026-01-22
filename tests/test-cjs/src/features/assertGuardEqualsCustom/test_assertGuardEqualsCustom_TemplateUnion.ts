import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_assertGuardEqualsCustom_TemplateUnion = (): void =>
  _test_assertGuardEquals(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )((input) =>
    typia.assertGuardEquals<TemplateUnion>(
      input,
      (p) => new CustomGuardError(p),
    ),
  );
