import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_createIs_TemplateConstant = (): void =>
  _test_is("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    typia.createIs<TemplateConstant>(),
  );
