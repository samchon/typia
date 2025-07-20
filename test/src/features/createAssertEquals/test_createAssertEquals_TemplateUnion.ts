import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_createAssertEquals_TemplateUnion = (): void =>
  _test_assertEquals(TypeGuardError)("TemplateUnion")<TemplateUnion>(
    TemplateUnion,
  )(typia.createAssertEquals<TemplateUnion>());
