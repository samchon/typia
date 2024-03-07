import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

import { TypeGuardError } from "typia";

export const test_assertEquals_TemplateConstant = _test_assertEquals(
  TypeGuardError,
)("TemplateConstant")<TemplateConstant>(TemplateConstant)((input) =>
  typia.assertEquals<TemplateConstant>(input),
);
