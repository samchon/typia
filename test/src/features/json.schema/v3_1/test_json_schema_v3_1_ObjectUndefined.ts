import typia from "typia";
import { ObjectUndefined } from "../../../structures/ObjectUndefined";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectUndefined = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectUndefined", 
  })(typia.json.schema<ObjectUndefined, "3.1">());