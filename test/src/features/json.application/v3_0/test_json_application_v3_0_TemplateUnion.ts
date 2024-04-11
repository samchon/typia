import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_json_application_v3_0_TemplateUnion = _test_json_application({
  version: "3.0",
  name: "TemplateUnion",
})(typia.json.application<[TemplateUnion], "3.0">());
