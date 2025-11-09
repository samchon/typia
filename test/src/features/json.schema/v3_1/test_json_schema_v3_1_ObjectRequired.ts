import typia from "typia";
import { ObjectRequired } from "../../../structures/ObjectRequired";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectRequired = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectRequired", 
  })(typia.json.schema<ObjectRequired, "3.1">());