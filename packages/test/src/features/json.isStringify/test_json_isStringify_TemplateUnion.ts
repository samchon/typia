import typia from "typia";

import { _test_json_isStringify } from "../../internal/_test_json_isStringify";
import { TemplateUnion } from "../../structures/TemplateUnion";

export const test_json_isStringify_TemplateUnion = _test_json_isStringify(
  "TemplateUnion",
)<TemplateUnion>(TemplateUnion)((input) =>
  typia.json.isStringify<TemplateUnion>(input),
);
