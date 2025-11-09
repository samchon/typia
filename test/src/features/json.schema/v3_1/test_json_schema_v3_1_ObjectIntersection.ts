import typia from "typia";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectIntersection = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectIntersection", 
  })(typia.json.schema<ObjectIntersection, "3.1">());