import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_schema_v3_1_TemplateConstant = _test_json_schema({
  version: "3.1",
  name: "TemplateConstant",
})(typia.json.schema<TemplateConstant, "3.1">());
