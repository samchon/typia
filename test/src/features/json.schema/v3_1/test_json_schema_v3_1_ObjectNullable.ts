import typia from "typia";
import { ObjectNullable } from "../../../structures/ObjectNullable";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectNullable = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectNullable", 
  })(typia.json.schema<ObjectNullable, "3.1">());