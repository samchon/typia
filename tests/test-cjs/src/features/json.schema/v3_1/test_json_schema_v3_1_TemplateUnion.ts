import typia from "typia";

import { _test_json_schema } from "../../../internal/_test_json_schema";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_json_schema_v3_1_TemplateUnion = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TemplateUnion",
  })(typia.json.schema<TemplateUnion, "3.1">());
