import typia from "typia";

import { _test_json_application } from "../../../internal/_test_json_application";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_application_v3_0_TemplateConstant =
  _test_json_application({
    version: "3.0",
    name: "TemplateConstant",
  })(typia.json.application<[TemplateConstant], "3.0">());
