import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertGuardCustom_TemplateUnion = (): void =>
  _test_assertGuard(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )(typia.createAssertGuard<TemplateUnion>((p) => new CustomGuardError(p)));
