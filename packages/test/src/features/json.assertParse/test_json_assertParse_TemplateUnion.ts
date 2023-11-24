import typia from "typia";

import { _test_json_assertParse } from "../../internal/_test_json_assertParse";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_assertParse_TemplateUnion = _test_json_assertParse(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.json.assertParse<TemplateUnion>(input),
);
