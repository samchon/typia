import typia from "typia";
import { ObjectGenericUnion } from "../../../structures/ObjectGenericUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ObjectGenericUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ObjectGenericUnion", 
  })(typia.json.schema<ObjectGenericUnion, "3.0">());