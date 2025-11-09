import typia from "typia";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_ToJsonNull = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "ToJsonNull", 
  })(typia.json.schemas<[ToJsonNull], "3.1">());