import typia from "typia";
import { DynamicNever } from "../../../structures/DynamicNever";
import { _test_json_schemas } from "../../../internal/_test_json_schemas";

export const test_json_schemas_v3_1_DynamicNever = (): void =>
  _test_json_schemas({
    version: "3.1",
    name: "DynamicNever", 
  })(typia.json.schemas<[DynamicNever], "3.1">());