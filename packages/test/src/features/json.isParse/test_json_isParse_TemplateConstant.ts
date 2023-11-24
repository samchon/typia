import typia from "typia";

import { _test_json_isParse } from "../../internal/_test_json_isParse";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_json_isParse_TemplateConstant = _test_json_isParse(
  "TemplateConstant",
)<TemplateConstant>(TemplateConstant)((input) =>
  typia.json.isParse<TemplateConstant>(input),
);
