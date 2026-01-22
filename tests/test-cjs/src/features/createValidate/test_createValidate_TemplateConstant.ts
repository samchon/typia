import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createValidate_TemplateConstant = (): void =>
  _test_validate("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    typia.createValidate<TemplateConstant>(),
  );
