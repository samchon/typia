import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertEqualsCustom_TemplateConstant =
  _test_assertEquals(CustomGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.createAssertEquals<TemplateConstant>((p) => new CustomGuardError(p)));
