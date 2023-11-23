import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createAssertEquals_TemplateAtomic = _test_assertEquals(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(typia.createAssertEquals<TemplateAtomic>());
