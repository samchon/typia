import typia from "typia";
import { TemplateUnion } from "../../../structures/TemplateUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_TemplateUnion = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "TemplateUnion", 
  })(typia.json.schemas<[TemplateUnion], "3.1">());