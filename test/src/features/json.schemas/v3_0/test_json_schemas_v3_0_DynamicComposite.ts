import typia from "typia";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_DynamicComposite = 
  _test_json_schemas({
    version: "3.0",
    name: "DynamicComposite", 
  })(typia.json.schemas<[DynamicComposite], "3.0">());