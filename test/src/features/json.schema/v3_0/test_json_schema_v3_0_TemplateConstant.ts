import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_schema_v3_0_TemplateConstant = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TemplateConstant",
  })(typia.json.schema<TemplateConstant, "3.0">());
