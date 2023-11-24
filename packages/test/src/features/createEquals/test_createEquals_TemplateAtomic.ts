import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_createEquals_TemplateAtomic = _test_equals(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)(typia.createEquals<TemplateAtomic>());
