import typia from "typia";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ObjectAlias = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ObjectAlias", 
  })(typia.json.schema<ObjectAlias, "3.1">());