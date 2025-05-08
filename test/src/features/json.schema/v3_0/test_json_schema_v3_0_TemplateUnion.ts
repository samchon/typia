import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_json_schema_v3_0_TemplateUnion = _test_json_schema({
  version: "3.0",
  name: "TemplateUnion",
})(typia.json.schema<TemplateUnion, "3.0">());
