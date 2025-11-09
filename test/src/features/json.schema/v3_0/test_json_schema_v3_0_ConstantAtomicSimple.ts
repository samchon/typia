import typia from "typia";
import { ConstantAtomicSimple } from "../../../structures/ConstantAtomicSimple";
import { _test_json_schema } from "../../../internal/_test_json_schema";

export const test_json_schema_v3_0_ConstantAtomicSimple = (): void =>
  _test_json_schema({
    version: "3.0",
    name: "ConstantAtomicSimple", 
  })(typia.json.schema<ConstantAtomicSimple, "3.0">());