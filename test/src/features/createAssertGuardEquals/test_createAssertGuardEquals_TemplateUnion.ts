import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_createAssertGuardEquals_TemplateUnion =
  _test_assertGuardEquals(TypeGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )(typia.createAssertGuardEquals<TemplateUnion>());
