import typia from "typia";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TemplateAtomic = 
  _test_json_schemas({
    version: "3.1",
    name: "TemplateAtomic", 
  })(typia.json.schemas<[TemplateAtomic], "3.1">());