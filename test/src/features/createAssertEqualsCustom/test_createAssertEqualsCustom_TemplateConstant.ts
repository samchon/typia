import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TemplateConstant =
  _test_assertEquals(CustomGuardError)("TemplateConstant")<TemplateConstant>(
    TemplateConstant,
  )(typia.createAssertEquals<TemplateConstant>((p) => new CustomGuardError(p)));
