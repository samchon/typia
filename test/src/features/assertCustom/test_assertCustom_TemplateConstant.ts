import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_assertCustom_TemplateConstant = (): void =>
  _test_assert(CustomGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )((input) =>
    typia.assert<TemplateConstant>(input, (p) => new CustomGuardError(p)),
  );
