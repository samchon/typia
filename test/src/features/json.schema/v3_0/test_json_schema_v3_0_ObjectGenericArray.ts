import typia from "typia";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectGenericArray = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectGenericArray", 
  })(typia.json.schema<ObjectGenericArray, "3.0">());