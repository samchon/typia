import typia from "typia";
import { ObjectDate } from "../../../structures/ObjectDate";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectDate = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectDate", 
  })(typia.json.schema<ObjectDate, "3.0">());