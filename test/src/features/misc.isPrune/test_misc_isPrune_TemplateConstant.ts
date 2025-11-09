import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_misc_isPrune_TemplateConstant = (): void =>
  _test_misc_isPrune("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    (input) => typia.misc.isPrune<TemplateConstant>(input),
  );
