import typia from "typia";

import { _test_json_schemas } from "../../../internal/_test_json_schemas";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_json_schemas_v3_0_TemplateUnion = _test_json_schemas({
  version: "3.0",
  name: "TemplateUnion",
})(typia.json.schemas<[TemplateUnion], "3.0">());
