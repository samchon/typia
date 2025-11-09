import typia from "typia";
import { DynamicComposite } from "../../../structures/DynamicComposite";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_DynamicComposite = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "DynamicComposite", 
  })(typia.json.schema<DynamicComposite, "3.0">());