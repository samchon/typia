import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createAssertEquals_TemplateConstant = _test_assertEquals(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)(
  typia.createAssertEquals<TemplateConstant>(),
);
