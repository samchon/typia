import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssert_TemplateAtomic = _test_assert(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(typia.createAssert<TemplateAtomic>());
