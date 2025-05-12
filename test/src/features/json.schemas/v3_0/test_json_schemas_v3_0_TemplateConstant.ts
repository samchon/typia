import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_json_schemas_v3_0_TemplateConstant = _test_json_schemas({
  version: "3.0",
  name: "TemplateConstant",
})(typia.json.schemas<[TemplateConstant], "3.0">());
