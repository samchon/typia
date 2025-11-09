import typia from "typia";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_TemplateUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "TemplateUnion", 
  })(typia.json.schema<TemplateUnion, "3.0">());