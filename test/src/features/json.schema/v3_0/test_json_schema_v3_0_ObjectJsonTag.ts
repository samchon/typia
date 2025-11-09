import typia from "typia";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectJsonTag = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectJsonTag", 
  })(typia.json.schema<ObjectJsonTag, "3.0">());