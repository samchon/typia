import typia from "typia";
import { UltimateUnion } from "../../../structures/UltimateUnion";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_0_UltimateUnion = 
  _test_json_schemas({
    version: "3.0",
    name: "UltimateUnion", 
  })(typia.json.schemas<[UltimateUnion], "3.0">());