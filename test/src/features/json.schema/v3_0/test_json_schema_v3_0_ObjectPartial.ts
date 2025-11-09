import typia from "typia";
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectPartial = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectPartial", 
  })(typia.json.schema<ObjectPartial, "3.0">());