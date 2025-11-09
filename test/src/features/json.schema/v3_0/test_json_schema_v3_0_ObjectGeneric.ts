import typia from "typia";
import { ObjectGeneric } from "../../../structures/ObjectGeneric";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectGeneric = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectGeneric", 
  })(typia.json.schema<ObjectGeneric, "3.0">());