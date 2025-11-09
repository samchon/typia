import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_equals_TemplateConstant = (): void =>
  _test_equals("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    (input) => typia.equals<TemplateConstant>(input),
  );
