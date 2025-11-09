import typia from "typia";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_ToJsonArray = (): void =>
  _test_json_schemas({
    version: "3.0",
    name: "ToJsonArray", 
  })(typia.json.schemas<[ToJsonArray], "3.0">());