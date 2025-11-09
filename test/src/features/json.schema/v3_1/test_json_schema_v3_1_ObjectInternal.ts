import typia from "typia";
import { ObjectInternal } from "../../../structures/ObjectInternal";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectInternal = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectInternal", 
  })(typia.json.schema<ObjectInternal, "3.1">());