import typia from "typia";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_1_ToJsonAtomicSimple = (): void =>
  _test_json_schema({
    version: "3.1",
    name: "ToJsonAtomicSimple", 
  })(typia.json.schema<ToJsonAtomicSimple, "3.1">());