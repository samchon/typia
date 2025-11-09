import typia from "typia";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_TemplateAtomic = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "TemplateAtomic", 
  })(typia.json.schema<TemplateAtomic, "3.1">());