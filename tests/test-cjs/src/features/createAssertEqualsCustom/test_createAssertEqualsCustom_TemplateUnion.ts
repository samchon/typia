import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertEqualsCustom_TemplateUnion = (): void =>
  _test_assertEquals(CustomGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )(typia.createAssertEquals<TemplateUnion>((p) => new CustomGuardError(p)));
