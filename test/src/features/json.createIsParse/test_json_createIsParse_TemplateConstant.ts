import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_createIsParse_TemplateConstant = (): void =>
  _test_json_isParse("TemplateConstant")<TemplateConstant>(TemplateConstant)(
    typia.json.createIsParse<TemplateConstant>(),
  );
