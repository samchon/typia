import typia from "typia";

import { _test_json_validateParse } from "../../internal/_test_json_validateParse";
import { TemplateAtomic } from "../../structures/TemplateAtomic";

export const test_json_validateParse_TemplateAtomic = _test_json_validateParse(
  "TemplateAtomic",
)<TemplateAtomic>(TemplateAtomic)((input) =>
  typia.json.validateParse<TemplateAtomic>(input),
);
