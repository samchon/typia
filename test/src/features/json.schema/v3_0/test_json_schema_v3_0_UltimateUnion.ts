import typia from "typia";
import { UltimateUnion } from "../../../structures/UltimateUnion";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_UltimateUnion = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "UltimateUnion", 
  })(typia.json.schema<UltimateUnion, "3.0">());