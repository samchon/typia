import typia from "typia";
import { ObjectPartial } from "../../../structures/ObjectPartial";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectPartial = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectPartial", 
  })(typia.json.schema<ObjectPartial, "3.1">());