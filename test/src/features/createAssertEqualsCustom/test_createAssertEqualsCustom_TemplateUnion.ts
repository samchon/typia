import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_TemplateUnion = _test_assertEquals(
  CustomGuardError,
)("TemplateUnion")<TemplateUnion>(TemplateUnion)(
  typia.createAssertEquals<TemplateUnion>((p) => new CustomGuardError(p)),
);
