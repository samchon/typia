import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateUnion } from "../../structures/TemplateUnion";

import { TypeGuardError } from "typia";

export const test_createAssert_TemplateUnion = _test_assert(TypeGuardError)(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)(typia.createAssert<TemplateUnion>());
